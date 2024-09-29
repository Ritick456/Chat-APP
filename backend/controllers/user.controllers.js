import User from "../model/user.model.js";

export const getUserSidebar = async (req,res)=>{
    try {
        const  loguser = req.user._id;

        const AllUsers = await User.find({_id:{$ne:loguser}}).select("-password"); //all user expect yourself

        res.status(200).json(AllUsers)

        
    } catch (error) {
        console.log("Error in getUserSidebar"+ error)
        res.status(500).json({Error:"Internal server error"})
    }
}