import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
    const {setAuthuser} = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {

        const res = await axios.post("/api/auth/logout")
        
        if(!res.data){
            throw new Error(res.data.error)
        }

        localStorage.removeItem("chat-user")
        setAuthuser(null);
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  
};
    return {loading,logout};
};

export default useLogout;
