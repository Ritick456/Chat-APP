import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Messagecontainer from "../../components/message/Messagecontainer";

const Home = () => {
  return (
    <div className="flex sm:h-[480px] md:h-[550px] rounded-lg shadow-md bg-gray-400 bg-clip-
         backdrop-filter backdrop-blur-lg  bg-opacity-0">
      <Sidebar />
      <Messagecontainer/>
      
    </div>
  );
};

export default Home;
