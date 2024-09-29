import React from 'react'
import Searchinput from './Searchinput'
import Conversation from './Conversation'
import Logout from './Logout'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div className=' border-r border-slate-500 flex flex-col'>
      <Searchinput/>
      <div className='divider px-3'></div>
      <Conversations/>
      <Logout/>
    </div>
  )
}

export default Sidebar
