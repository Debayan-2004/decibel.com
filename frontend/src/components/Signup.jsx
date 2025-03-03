import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api";

const Signup = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
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
            const response = await signup(formData);
            
            // ✅ Store token & user info in localStorage
            localStorage.setItem("token", response.token);
            localStorage.setItem("user", JSON.stringify({ username: formData.username }));

            setMessage("Signup successful! Redirecting...");
            setLoading(false);
            
            // ✅ Redirect & refresh navbar
            setTimeout(() => {
                navigate("/");
                window.location.reload(); // Ensure Navbar updates
            }, 1000);
        } catch (error) {
            setMessage(error.response?.data?.msg || "Signup failed");
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md min-h-119  mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                

                
                
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={formData.username}
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-2 border rounded-md"
                />
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
                    {loading ? "Signing up..." : "Sign Up"}
                </button>
            </form>
            {message && <p className="mt-4 text-center text-blue-500">{message}</p>}
        </div>
    );
};

export default Signup;

