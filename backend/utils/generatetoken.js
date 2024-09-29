import jwt from "jsonwebtoken"

const generateToken = (userid,res)=>{
    const token = jwt.sign({userid},process.env.TOKEN_KEY,{
        expiresIn:"10d"
    })

    res.cookie("login",token,{
        maxAge: 15*24*60*60*1000,
        HttpOnly:true
    })
}


export default generateToken;