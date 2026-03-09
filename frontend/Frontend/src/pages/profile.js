import { useNavigate } from "react-router-dom";


function Profile() {

    const [data, setData] = useState("");

    const navigate = useNavigate;


    const token = localStorage.getItem("token");
    if (!token) {
        navigate("/")
        return
    }
    const fetchProfile = async () => {
        try {
            const res = await axios.get("http://localhost:3000/profile", {
                headers:
                    { Authorization: `Bearer ${token}` }
            })
            setData(res.data.user.username)
        } catch (error) {
            console.log(error.message)
            navigate("/")
        }

    }

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/")
    }
    return (
        <div>
            <h2>My Profile</h2>
            <p>User:{data}</p>
            <button onClick={() => navigate("/dashboard")}>
                Go to Dashboard
            </button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile