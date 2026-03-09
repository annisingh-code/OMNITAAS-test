import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Profile(){

  const [user,setUser] = useState("")
  const navigate = useNavigate()

  const token = localStorage.getItem("token")

  const getProfile = async () => {

    try{

      const res = await axios.get("http://localhost:5000/profile",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      setUser(res.data.user.username)
    }catch(err){
      navigate("/")
    }

  }

  useEffect(()=>{
  if(!token){
      navigate("/")
      return
    }
    getProfile()
  },[])

  const logout = () => {

    localStorage.removeItem("token")
    navigate("/")

  }

  return(
    <div>
      <h2>Profile</h2>
      <p>User: {user}</p>
      <button onClick={()=>navigate("/dashboard")}>
        Go Dashboard
      </button>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  )

}

export default Profile