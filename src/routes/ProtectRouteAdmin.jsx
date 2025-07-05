import React, { useState, useEffect } from 'react'
import useEcomStore from '../store/ecom-store'
import { currentAdmin } from '../api/auth'
import LoadingToRedirect from './LoadingToRedirect'

const ProtectRouteAdmin = ({ element }) => {
  const [ ok, setOk ] = useState(false)
  // ต้องใช้พวกข้อมูล user แล้วเรามีจาก useEcomStore อยู่แล้วก็ดึงมาใช้ได้เลย
  const user = useEcomStore((state) => state.user)
  const token = useEcomStore((state) => state.token)
  
  useEffect(() => {
    if(user && token) {
      // send to backend
      currentAdmin(token) // ถ้า currentAdmin ทำงานสำเร็จจะไป then ถ้า error จะไป catch
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

export default ProtectRouteAdmin