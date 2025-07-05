import React,{ useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const LoadingToRedirect = () => {
  const [count, setCount] = useState(3)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => {
        if(currentCount === 1) {
          clearInterval // หยุดการทำงาน
          setRedirect(true) // เพื่อที่จะเปลี่ยนหน้า
        }
        return currentCount - 1
      })

    }, 1000); // ทุกๆ 1 วินาที

    return () => clearInterval(interval) // ต้องเคลียร์ก่อนเพื่อที่จะทำงานรอบใหม่
  },[]) // ใส่ array เพื่อกัน infinityloop

  if(redirect) {
    return <Navigate to={'/'} /> // ถ้า redirect มันเป็น true จะทำการไปหน้าแรก
  }

  return (
    <div>No Permission, Redirect in {count}</div> // จะเป็น 3..2..1
  )
}

export default LoadingToRedirect