import React from 'react'
import Menu from '../components/Menu'
import UsersCom from '../components/UsersCom'
import './userPage.scss'

const UsersPage = () => {
   return (
      <div id='userPage'>
         <Menu />
         <UsersCom />
      </div>
   )
}

export default UsersPage
