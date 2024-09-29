import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversations = () => {
    const [loading,setLoading] = useState(false);
    const [conversation,setConversation] = useState([]);

    useEffect(()=>{
        const getConversation = async ()=>{
            setLoading(true);

            try {

                const res = await axios.get("/api/users");

                if(res.data.Error){
                    throw new Error(data.Error)
                }

                setConversation(res.data)

            } catch (error) {
                toast.error(error.message)
            } finally{
                setLoading(false);
            }
        }

        getConversation();
    },[])

    return {loading,conversation }

}

export default useGetConversations
