import axios from 'axios'
import { create } from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware' // ต้องใช้ localStroage นะจ๊ะ

// เป็น Arrow Function ที่ return ออกไปเป็น object
const ecomStore = (set) => ({
    // key:value
    user:null,
    token:null,

    // ต้องใส่รับค่า parameter มาด้วย
    actionLogin : async (form) => { // เอาไปใช้ใน Login มันจะออกหน้า Login
        const res = await axios.post('http://localhost:5001/api/login',form)
        // console.log(res.data.token)
        // ข้อมูลที่มาจาก backend จะได้เข้ามาใน state จะได้ใช้งานง่ายๆ
        set({ 
            user: res.data.payload,
            token: res.data.token
        })
        return res // return ค่ากลับไป
    }
})


// คือมันจะทำให้ข้อมูลถูกเก็บเข้าไปใน Storage
const userPersist = {
    name: 'ecom-store',
    storage: createJSONStorage(() => localStorage) // ต้องใส่นะ
}


// อันนี้คือบอกว่าจะใช้ ecomStore แล้วผ่าน create ของ zustand
const useEcomStore = create(persist(ecomStore,userPersist)) //persist เอาไว้ทำ LocalStorage

export default useEcomStore