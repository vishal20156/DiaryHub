import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'


const Layout = () => {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
      <Sidebar/>
      <div className='w-screen'>
        <Header/>
        <div className='h-screen'>{<Outlet/>}</div>
      </div>
      
    </div>
  )
}

export default Layout
