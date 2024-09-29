import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import generateToken from "../utils/generatetoken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const pass = await bcrypt.compare(password, user?.password || " "); // (pass,hashpass)

    if (!user || !pass) {
      return res
        .status(201)
        .json({ Error: "username or password is incorrect" });
    }
    generateToken(user._id, res);

    res.status(201).json({
      _id:user._id,
      fullname: user.fullname,
      username: user.username,
      password: user.password,
      gender: user.gender,
      profilepic: user.profilepic,
    });
  } catch (error) {
    console.log("Error in auth controller login " + error);
    res.status(401).json({ Error: "internal server error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    if (password != confirmPassword) {
      return res.status(401).json({ error: "password does not match" });
    }

    const user = await User.findOne({ username });
    
    if (user) {
   
      return res.status(401).json({ error: "user already exist" });
    }

    // hash password here


    const hashPassword = await bcrypt.hash(password, 10);

    const boypic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlpic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashPassword,
      gender,
      profilepic: gender == "male" ? boypic : girlpic,
    });

    if (newUser) {
      generateToken(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        fullname: newUser.fullname,
        username: newUser.username,
        password: newUser.password,
        gender: newUser.gender,
        profilepic: newUser.profilepic,
      });
    }
  } catch (error) {
    console.log("error in auth controller signup" + error);
    res.status(401).json({ Error: "internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("login", "", {
      maxAge: 0,
    });
    res.status(201).json({ Errot: "logout sucessfully" });
  } catch (error) {
    console.log("error in auth controller logout" + error);
    res.status(401).json({ msg: "internal server error" });
  }
};
