import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import useEcomStore from '../../store/ecom-store';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  // Javascript

  // ใช้ usenavigate เพื่อที่เวลา login เสร็จจะนำไปหน้าที่เป็นของ role นั้นๆ
  const navigate = useNavigate()

  // เข้าถึงข้อมูล globalstate
  // คือเวลาตั้งชื่อให้ตั้งเป็นชื่อจริงๆ แต่พอทำแล้วข้อมูลใน object จะมาหมดเลย
  // เลยแก้ปัญหาโดยใช้ state เป็น state.name แทน จะได้ไม่ต้องดึงข้อมูลมาหมด
  // เวลาจะทำอะไรก็ state.ข้อมูล value
  const actionLogin = useEcomStore((state) => state.actionLogin) // เข้าถึง state actionLogin
  const user = useEcomStore((state) => state.user)
  console.log('user from zustand', user)


  // ต้องทำ useState มาเก็บค่าอะไรงี้ set มาเป็นคู่กัน
  const [form, setForm] = useState({
    email:"",
    password:"",
  })

  const handleOnChange = (event) => { // เอาไปใช้กับปุ่มเวลากดปุ่ม
    // code
    // ถ้าอยากรู้ว่าเราอยากได้ค่าอะไรก็ไป inspec ใน chrome อิอิ
    // console.log(event.target.name,event.target.value) 
    setForm({
      // การที่ ... มันคือการนำข้อมูลเดิมของเรามาก่อน ก็คือไอข้างบนตรง useState
      ...form,
      // ต่อไปจะเป็น key:value
      [event.target.name]:event.target.value // key ต้องใส่ [] ครอบ แต่ value ไม่ต้อง
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault() // ป้องกันการเวลากดปุ่มแล้วมันจะ refresh หน้าให้
    try {
      const res = await actionLogin(form) // ส่งค่า form ไป เพราะใน ecom-store มันรับค่า parameter ก็เลยต้องส่งไป
      console.log('res',res)
      
      // ถ้าจะให้มันนำไปหน้าไหนเวลา login เสร็จ ของ role ไหนต้องใช้ navigate
      const role = res.data.payload.role // เก็บ role เอาไว้เพื่อที่จะได้รู้ว่าเวลา login เข้าไปต้องเป็นหน้าของ role ไหน
      // console.log('role',role)
      roleRedirect(role) // ทำการ navigate ส้ราง function ไว้แล้วอยู่ข้างล่าง
      toast.success('Welcome Back')
    } catch (error) {
      console.log(error)
      const errMsg = error.response?.data?.message
      toast.error(errMsg)
    }
  }

  // เอาไป navigate
  const roleRedirect = (role) => {
    if(role == 'admin') {
      navigate('/admin')
    } else {
      navigate('/user')
    }
  }


  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>


      Email
        <input className='border'
          onChange={handleOnChange}
          name='email'
          type='email'
        />

      Password 
        <input className='border'
          onChange={handleOnChange}
          name='password'
          type='text'
        />

        <button className='bg-blue-500 rounded-md'>Login</button>

      </form>
    </div>
  )
}

export default Login