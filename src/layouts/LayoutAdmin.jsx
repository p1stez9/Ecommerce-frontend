import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    // ไอพวก Layout อย่าลืม Outlet ไม่งั้นมันไม่ออกนะจ๊ะ
    <div>
        <h1>Sidebar</h1>
        <h1>Header</h1>
        <hr />
        <Outlet />
    </div>
  )
}

export default LayoutAdmin