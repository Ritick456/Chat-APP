import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongodb from "./db/connection.js";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import { app, server } from "./socket/socket.js";


dotenv.config();


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);




server.listen(process.env.PORT,()=>{
    connectToMongodb();
    console.log(`server is running on ${process.env.PORT}`)
})
