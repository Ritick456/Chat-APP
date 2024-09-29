import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(); //1 step

// 2:53
export const AuthContextProvider = ({ children }) => {
  //2nd step0
  const [authuser, setAuthuser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null

  );
  
  return (
    <AuthContext.Provider value={{ authuser, setAuthuser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  //3th step
  return useContext(AuthContext);
};
