import mongoose from "mongoose";

const connectToMongodb = async ()=>{
    try {
        await mongoose.connect(process.env.uri);
    console.log("connected to database");
       
    } catch (error) {
        console.log("error: while connecting to db" + error)
    }
}

export default connectToMongodb;