import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {
    const {loading,conversation}=useGetConversations();
    // console.log(conversation)
  return (
    <div>
      {conversation.map((conversation,idx)=>(
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          lastidx = { idx==conversation.length-1}
        
        />
      ))}

     
    
    </div>
  )
}

export default Conversations
