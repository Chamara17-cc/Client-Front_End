// src/component/Login/ForgotPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { FaUser, FaLock } from 'react-icons/fa';
import { useAuth } from '../../Auth/AuthContext';
//import './ForgotPassword.css'; 


const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      UserName: username,
      Email: email
    };

    console.log("Email:", email);
    console.log("UserName:", username);

    try {
      const response = await axios.post('https://localhost:44339/api/ClientAccount/password-forgot', data);
      console.log('API Response:', response.data);

      const randomPassword = response.data.password; // Assuming response contains the random password
      alert("A random password has been sent to your email.");
      
      // Call sendEmail after successful password reset
      sendEmail(randomPassword, username, email);
      clearForm();
    } catch (error) {
      console.error("Password reset failed:", error);
      alert("Failed to reset password. Please try again later.");
    }
  };

  const sendEmail = (password, userName, userEmail) => {
    const serviceID = 'service_7scovdt';
    const templateID = 'template_dli43nj';
    const publicKey = '5nPPUyZWyibEji8jt';

    const templateParams = {
      user_name: userName,
      user_password: password,
      user_mail: userEmail
    };

    console.log('Sending email with:', serviceID, templateID, templateParams);
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        navigate("/login");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  const clearForm = () => {
    setEmail('');
    setUsername('');
  };

  return (
    <div className="wrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={handleEmailChange}
              required 
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input 
              type="text" 
              placeholder="Enter your username" 
              value={username}
              onChange={handleUsernameChange}
              required 
            />
            <FaLock className="icon" />
          </div>

          <button type="submit">Submit</button>

          <div className="remember-forgot">
            <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
