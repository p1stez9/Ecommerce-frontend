import axios from "axios";

// อย่าลืม export ข้างหน้าถ้าจะเอาไปให้อันอื่นใช้
// อันนี้มันเป็นคริป ติดต่อกับหลังบ้าน
// ทำมาสองแบบ เอาไว้เผื่อลืม
export const currentUser = async (token) =>  await axios.post('http://localhost:5001/api/current-user',
    {},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
)

export const currentAdmin = async (token) => {
    return await axios.post('http://localhost:5001/api/current-admin',
        {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}