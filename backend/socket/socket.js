import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express();

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
})

export const getReceiverId = (receiverId)=>{
    return socketUserMap[receiverId];
}

const socketUserMap = {} //{userId:socket.id}

io.on("connection",(socket)=>{
    console.log("a user us conncted", socket.id)


    const userId = socket.handshake.query.userId;
    if(userId!="undefined")  socketUserMap[userId] = socket.id;

    io.emit("getOnlineUsers",Object.keys(socketUserMap))
    
    
    socket.on("disconnect",()=>{
        console.log("user disconnected", socket.id)
        delete socketUserMap[userId];
        io.emit("getOnlineUsers",Object.keys(socketUserMap))

    })
})


export {app, io ,server}