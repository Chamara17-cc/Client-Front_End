// src/component/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { FaUser, FaLock } from 'react-icons/fa';
import { useAuth } from '../../Auth/AuthContext';
import './Login.css'; 
import Sidebar from "../Dashboard/Sidebar"; 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      UserName: username,
      Password: password,
    };

    try {
      const response = await axios.post('https://localhost:44339/api/AuthClient/login', data);
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      const decodedToken = jwtDecode(accessToken);
      console.log("decoded token: " + decodedToken);
      const userCategoryId = decodedToken['UserCategoryId'];
      console.log("user category Id: " + userCategoryId);

      login({
        userId: decodedToken['UserID'],
        userName: decodedToken['UserName'],
        userCategoryId,
        accessToken,
        refreshToken,
      });

      switch (userCategoryId) {
       
        case '4':
          navigate('/clientDashboard');
          break;
        default:
          navigate('/');
          break;
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        console.error('Login failed:', error);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="wrapper1">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={handleUsernameChange}
              required 
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={handlePasswordChange}
              required 
            />
            <FaLock className="icon" />
          </div>

          <button type="submit">Login</button>

          <div className="remember-forgot">
            <a href="/forgotPassword">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
