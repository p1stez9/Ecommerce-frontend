import React from 'react'
import { Link } from 'react-router-dom' // เอาไว้กด link ไปหน้าอื่นๆ

const MainNav = () => {
  return (
    <nav className='bg-green-200 '>
        <div className='mx-auto px-4'>
            <div className='flex justify-between h-16'>
                <div className='flex items-center gap-4'>
                    <Link to = {'/'} className='text-2xl font-bold' >LOGO</Link>
                    <Link to = {'/'}>Home</Link>
                    <Link to = {'shop'}>Shop</Link>
                    <Link to = {'cart'}>Cart</Link>
                </div>

                <div className='flex items-center gap-4'>
                    <Link to = {'register'}>Register</Link>
                    <Link to = {'login'}>Login</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default MainNav