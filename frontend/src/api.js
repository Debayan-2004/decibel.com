import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5001/api/auth",
    headers: { "Content-Type": "application/json" },
    withCredentials: true, // ✅ Important for authentication
});

// Signup
export const signup = async (userData) => {
    const response = await API.post("/signup", userData);
    return response.data;
};

// Login
export const login = async (userData) => {
    const response = await API.post("/login", userData);
    return response.data;
};

// Fetch Profile (Protected Route)
export const getProfile = async (token) => {
    const response = await API.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
