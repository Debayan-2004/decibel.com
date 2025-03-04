import axios from "axios";

const API = axios.create({
    baseURL:'https://decibelbackend.vercel.app/';,  // ✅ Updated for deployment
    headers: { "Content-Type": "application/json" },
    withCredentials: true, // ✅ Ensure cookies are sent with requests
});

// ✅ Automatically attach token to protected requests
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 🔹 Helper function to handle errors gracefully
const handleRequest = async (request) => {
    try {
        const response = await request();
        return response.data;
    } catch (error) {
        throw error.response?.data?.msg || "An error occurred. Please try again.";
    }
};

// ✅ Signup
export const signup = async (userData) => handleRequest(() => API.post("/signup", userData));

// ✅ Login
export const login = async (userData) => handleRequest(() => API.post("/login", userData));

// ✅ Fetch Profile (Protected Route)
export const getProfile = async () => handleRequest(() => API.get("/profile"));

