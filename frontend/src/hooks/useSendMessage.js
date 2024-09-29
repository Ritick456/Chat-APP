import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
import axios from 'axios';

const useSendMessage = () => {
    const [loading,setLoading] = useState();
    const {messages,setMessages,selectedConversation} = useConversation();

    const sendMessage = async (message)=>{

        setLoading(true);
        try {
            
            const res = await axios.post(`/api/message/send/${selectedConversation._id}`,{message})
    
     
            if(res.data.Error) throw new Error(data.Error);
            setMessages([...messages,res.data])
    
        } catch (error) {
            
            toast.error(error.message);
            
        }finally{
            setLoading(false);
        }
    }
    return {loading,sendMessage}

}

export default useSendMessage
