import React from "react";
import "./Logoutstyle.css";
import { useNavigate } from "react-router-dom";
import apiRequest from '../Auth/ApiService'; // Import the apiRequest function
import { useAuth } from '../Auth/AuthContext'; // Import the useAuth hook

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Use the logout function from the context
  const handleLogout = async () => {
    if (window.confirm("Do you want to log out?")) {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
  
        await apiRequest("https://localhost:44339/api/Auth/logout", "POST", { refreshToken });
  
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
  
        logout();
        navigate("/loginForm");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("Logout failed: Access token expired or invalid");
          alert("Your session has expired. Please log in again.");
          navigate("/loginForm");
        } else {
          console.error("Logout failed:", error);
          alert("An error occurred. Please try again later.");
        }
      }
    }
  };
  

  return (
    <div className="logout">
      <i className="bi bi-box-arrow-right"></i>
      {/* Add onClick event listener to the button */}
      <input
        type="button"
        value="Log Out"
        className="logoutbutton"
        onClick={handleLogout}
      />
    </div>
  );
}