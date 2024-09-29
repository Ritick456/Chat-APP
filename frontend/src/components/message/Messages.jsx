import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'
import useListenMessage from '../../hooks/useListenMessage'

const Messages = () => {
  const {loading,messages}=useGetMessage()
  useListenMessage()
  
  const lastmsgref = useRef();

  useEffect(()=>{
    setTimeout(() => {
      lastmsgref.current?.scrollIntoView({behavior:"smooth"})
    }, 100);
  },[messages])
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
      { messages.length === 0 && (
        <p className=' text-center'>send message to start conversation</p>
      )}
        {!loading && messages.length >0 && messages.map((message)=>(
          <div key={message._id} ref={lastmsgref}>
            <Message  message={message}/>
            </div>
        ))}


    </div>
  )
}

export default Messages
