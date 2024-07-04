// LogoutComponent.js
import React from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from '../Auth/ApiService'; // Import the apiRequest function
import { useAuth } from '../Auth/AuthContext'; // Import the useAuth hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import the logout icon Ensure this path is correct

export default function LogoutComponent() {
    const navigate = useNavigate();
    const { logout } = useAuth(); // Use the logout function from the context
    
    const handleLogout = async () => {
        if (window.confirm("Do you want to log out?")) {
            try {
                const refreshToken = localStorage.getItem("refreshToken");
                console.log("Logging out with refreshToken:", refreshToken);
                
                const response = await apiRequest("https://localhost:44339/api/AuthClient/logout", "POST", { refreshToken });
                console.log("Logout response:", response);
    
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
    
                logout();
                navigate("/"); // Redirect to the landing page
            } catch (error) {
                if (error.response) {
                    console.error("Logout failed:", error.response.data);
                    if (error.response.status === 401) {
                        alert("Your session has expired. Please log in again.");
                        navigate("/"); // Redirect to the landing page
                    } else {
                        alert("An error occurred. Please try again later.");
                    }
                } else {
                    console.error("Logout failed:", error.message);
                    alert("An error occurred. Please try again later.");
                }
            }
        }
    };
    
    return (
        <div className="logout" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
            <span className="logout-text">Log Out</span>
        </div>
    );
}
