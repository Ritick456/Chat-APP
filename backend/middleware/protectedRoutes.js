import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const protectedRoutes = async (req, res, next) => {
  try {
    const token = req.cookies.login;

    if (!token) {
      res.status(401).json({ error: "unauthorized no token provided" });
    }

    const decode = jwt.verify(token, process.env.TOKEN_KEY);

    if (!decode) {
      res.status(401).json({ error: "unauthorized Invalid token" });
    }
      
    const user = await User.findById(decode.userid).select("-password");
    
      
    if(!user){
        res.status(401).json({ error: "user not found" });

    }

    req.user = user;

    next();

  } catch (error) {
    console.log("Error in middleware protected routes" + error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectedRoutes;
