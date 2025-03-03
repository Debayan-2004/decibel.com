import { useEffect, useState } from "react";
import { getProfile } from "../api";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return setMessage("No token found, please login.");

                const response = await getProfile(token);
                setUser(response);
            } catch (error) {
                setMessage(error.response?.data?.msg || "Failed to fetch profile");
            }
        };

        fetchProfile();
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>{message}</p>
            )}
        </div>
    );
};

export default Profile;
