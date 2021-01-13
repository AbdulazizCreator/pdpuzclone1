import React from 'react'
import ChatTask from './ChatTasks/ChatTask'
import Menu from './Menu/Menu'

function index() {
   return (
      <React.Fragment>
         <Menu />
         <ChatTask />
      </React.Fragment>
   )
}

export default index
