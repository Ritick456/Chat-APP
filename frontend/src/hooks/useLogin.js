import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthuser} = useAuthContext();

    const login = async ({username,password})=>{
        const success = handleInputs({ username, password });

        // console.log(success);
    
        if (!success) return;

        setLoading(true);
        try {

            const res = await axios.post("/api/auth/login", {
                username,
                password,
            });

           
            if(res.data.Error){
                throw new Error(res.data.Error)
            }

            localStorage.setItem("chat-user",JSON.stringify(res.data))
            
            setAuthuser(res.data);
            
        } catch (error) {
            toast.error(error.message);   
        }
    }

    return [loading,login]

}

export default useLogin



function handleInputs({username,password}){
    if( !username || !password ){
        toast.error("please fill all the fields")
        return false
    }

    
    return true
}
