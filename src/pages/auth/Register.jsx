import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';


const Register = () => {
  // Javascript
  // ต้องทำ useState มาเก็บค่าอะไรงี้ set มาเป็นคู่กัน
  const [form, setForm] = useState({
    email:"",
    password:"",
    confirmPassword:""
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
    // ถ้าเป็น object เราจะต้องเอา คำนำหน้ามันมาใส่แล้วก็จุด
    if(form.password !== form.confirmPassword) {
      return alert('Confirm Password is not match!!!') // ดัก
    }
    console.log(form)

    // Send to Backend
    try{
      // code
      const res = await axios.post('http://localhost:5001/api/register', form)

      console.log(res)
      toast.success(res.data) // alert toast ที่ import เข้ามา
    } catch (error) {
      // error
      // optional chaning คือตัว ? เอาไว้สำหรับกัน error เช่น ถ้าไม่มีข้อมูล response หรือ data จะไม่ error
      const errMessage = error.response?.data?.message
      toast.error(errMessage) // alert toast ที่ import เข้ามา
      console.log(error)
    }

  }


  return (
    <div>
      Register
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

      Confirm Password 
        <input className='border'
          onChange={handleOnChange}
          name='confirmPassword'
          type='text'
        />
        <button className='bg-blue-500 rounded-md'>Register</button>

      </form>
    </div>
  )
}

export default Register