

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import logo from "../images/sm.black.png";


const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await login(formData);
            
            // ✅ Store token & user info in localStorage
            localStorage.setItem("token", response.token);
            localStorage.setItem("user", JSON.stringify(response.user || { username: "JohnDoe" })); 
            
            setMessage("Login successful!");
            setLoading(false);
            
            // ✅ Redirect & refresh navbar
            setTimeout(() => {
                navigate("/");
                window.location.reload(); // Ensure Navbar updates
            }, 1000);
        } catch (error) {
            setMessage(error.response?.data?.msg || "Login failed");
            setLoading(false);
        }
    };

    return (<div className="min-h-122 flex items-center justify-center ">
        <div className="max-w-md mx-auto mt-10 p-9 bg-white shadow-xl rounded-md border-gray-400 border-2 ">
           <img src={logo} alt="" className="h-20 w-auto mx-auto mb-4 "/>
            <h2 className="text-4xl font-semibold mb-4 text-center"><span className="text-blue-600 text-4xl">L</span>ogin</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-2 border rounded-md"
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-2 border rounded-md"
                />
                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold"
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
            {message && <p className="mt-4 text-center text-blue-500">{message}</p>}
        </div></div>
    );
};

export default Login;
