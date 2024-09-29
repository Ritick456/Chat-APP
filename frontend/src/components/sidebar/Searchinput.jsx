import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { GoSearch } from "react-icons/go";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
const Searchinput = () => {
  const [search,setSearch] = useState("");
  const {setSelectedConversation}=useConversation();
  const {conversation} = useGetConversations();

  
  const handlesubmit = (e)=>{
    e.preventDefault();
   
    
    if(!search) return;
    
    if(search.length<3) toast.error("search word at least 3 word")
    const newconversation = conversation.find((c)=> c.fullname.toLowerCase().includes(search.toLowerCase()))
    

   
    if(newconversation){
      setSelectedConversation(newconversation);
      setSearch("");

    }else toast.error("user not found")

  }


  return (
    <div>
      <form className='flex items-center gap-2' onSubmit={handlesubmit}>
        <input type="text" 
        placeholder='search' 
        className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}

        /> 
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <GoSearch />

        </button>
      </form>
    </div>
  )
}

export default Searchinput
