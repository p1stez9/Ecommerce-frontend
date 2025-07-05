import React, { useState, useEffect } from 'react'
import useEcomStore from '../store/ecom-store'
import { currentUser } from '../api/auth'
import LoadingToRedirect from './LoadingToRedirect'

const ProtectRouteUser = ({ element }) => {
  const [ ok, setOk ] = useState(false)
  // ต้องใช้พวกข้อมูล user แล้วเรามีจาก useEcomStore อยู่แล้วก็ดึงมาใช้ได้เลย
  const user = useEcomStore((state) => state.user)
  const token = useEcomStore((state) => state.token)
  
  useEffect(() => {
    if(user && token) {
      // send to backend
      currentUser(token) // ถ้า currentUser ทำงานสำเร็จจะไป then ถ้า error จะไป catch
      .then((res) => {
        //console.log(res)
        setOk(true)
      })
      .catch((error) => {
        //console.log(error)
        setOk(false)
      })
    }
  },[]) 

  return ok ? element : <LoadingToRedirect />
}

export default ProtectRouteUser