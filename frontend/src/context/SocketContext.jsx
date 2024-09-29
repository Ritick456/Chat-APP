import { createContext, useContext, useEffect, useState } from "react";
import {  useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

const socketcontext = createContext();

export const  useSocketContext = ()=>{
    return useContext(socketcontext)
}

export const SocketContextProvider = ({children})=>{

    const [socket,setSocket] = useState(null);
    const [onlineUser,setOnlineUser] = useState([]);
    const {authuser}=  useAuthContext();

    useEffect(()=>{
        if(authuser){
            const socket = io("http://localhost:8000",{ query:{ userId:authuser._id,}} )
            setSocket(socket);

            socket.on("getOnlineUsers",(users)=>{
                setOnlineUser(users)
            })

            return ()=> socket.close()

        }else{
            if(socket){
                socket.close();
                setSocket(null)
            }
        }
    },[authuser])
    


    return <socketcontext.Provider value={{socket,onlineUser}} >      {children}       </socketcontext.Provider>
}
