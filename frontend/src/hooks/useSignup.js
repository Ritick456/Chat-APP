import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
   
    const [loading,setloading] = useState(false);
    const {setAuthuser}=useAuthContext();

    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        const success = handleInputs({ fullname, username, password, confirmPassword, gender });

        // console.log(success);
    
        if (!success) return;
    
        setloading(true);
        
        try {
            const res = await axios.post("/api/auth/signup", {
                fullname,
                username,
                password,
                confirmPassword,
                gender
            });
        

            
            localStorage.setItem("chat-user",JSON.stringify(res.data))
            setAuthuser(res.data)


        } catch (error) {
            // console.error(error); // Corrected to log the error correctly
            toast.error(error.message);
        } finally {
            setloading(false);
        }
    };
    

    return {loading,signup};
}

export default useSignup

function handleInputs({fullname,username,password,confirmPassword,gender}){
    if(!fullname ||!username || !password ||!confirmPassword ||!gender){
        toast.error("please fill all the fields")
        return false
    }

    if(confirmPassword !== password){
        toast.error("password does not match")
        return false
    }
    return true
}
