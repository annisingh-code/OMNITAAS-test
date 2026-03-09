import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"


function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:3000/login", { username, password });
            localStorage.setItem("token", res.data.token)
            navigate("/profile")
        }
        catch (error) {
            console.log("Invalid credentials")
        }
        setLoading(false)
    }

    return (
        <div>
            <h2>
                Login
            </h2>
            <form onSubmit={handleLogin}>
                <input
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    onChange={(e) => setUsername(e.target.password)}
                />
            </form>
            <button onClick={handleLogin}>
                {loading ? "loading..." : "Login"}
            </button>
        </div>
    )
}


