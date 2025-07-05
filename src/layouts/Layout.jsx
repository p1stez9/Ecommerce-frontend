import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../components/MainNav'

const Layout = () => {
  return (
    // ไอพวก Layout อย่าลืม Outlet ไม่งั้นมันไม่ออกนะจ๊ะ
    <div>
        <MainNav /> 
        
        <main>
          <Outlet />
        </main>
    </div>
  )
}

export default Layout