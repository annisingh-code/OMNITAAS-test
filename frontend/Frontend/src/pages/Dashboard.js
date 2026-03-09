import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {

    const [msg, setMsg] = useState("")
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const getDashboard = async () => {
        try {
            const res = await axios.get("http://localhost:5000/dashboard", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMsg(res.data.message)
        } catch (err) {
            navigate("/")
        }
    }

    useEffect(() => {
        if (!token) {
            navigate("/")
            return
        }
        getDashboard()
    }, [])

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{msg}</p>
            <button onClick={() => navigate("/profile")}>
                Back
            </button>
        </div>
    )

}

export default Dashboard