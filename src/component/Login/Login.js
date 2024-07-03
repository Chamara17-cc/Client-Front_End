// // src/component/Login/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import {jwtDecode} from 'jwt-decode';
// import { FaUser, FaLock } from 'react-icons/fa';
// import { useAuth } from '../../Auth/AuthContext';
// import './Login.css'; 
// import Sidebar from "../Dashboard/Sidebar"; 
// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = {
//       UserName: username,
//       Password: password,
//     };

//     try {
//       const response = await axios.post('https://localhost:44339/api/AuthClient/login', data);
//       const { accessToken, refreshToken } = response.data;
//       localStorage.setItem('accessToken', accessToken);
//       localStorage.setItem('refreshToken', refreshToken);

//       const decodedToken = jwtDecode(accessToken);
//       console.log("decoded token: " + decodedToken);
//       const userCategoryId = decodedToken['UserCategoryId'];
//       console.log("user category Id: " + userCategoryId);

//       login({
//         userId: decodedToken['UserID'],
//         userName: decodedToken['UserName'],
//         userCategoryId,
//         accessToken,
//         refreshToken,
//       });

//       switch (userCategoryId) {
       
//         case '4':
//           navigate('/clientDashboard');
//           break;
//         default:
//           navigate('/');
//           break;
//       }
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.message) {
//         alert(error.response.data.message);
//       } else {
//         console.error('Login failed:', error);
//         alert('An error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div className="wrapper1">
//       <div className="wrapper">
//         <form onSubmit={handleSubmit}>
//           <div className="input-box">
//             <input 
//               type="text" 
//               placeholder="Username" 
//               value={username}
//               onChange={handleUsernameChange}
//               required 
//             />
//             <FaUser className="icon" />
//           </div>

//           <div className="input-box">
//             <input 
//               type="password" 
//               placeholder="Password" 
//               value={password}
//               onChange={handlePasswordChange}
//               required 
//             />
//             <FaLock className="icon" />
//           </div>

//           <button type="submit">Login</button>

//           <div className="remember-forgot">
//             <a href="/forgotPassword">Forgot password?</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { FaUser, FaLock,FaEye,FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../Auth/AuthContext';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import { Toaster, toast } from 'react-hot-toast';


const Login = () => {
  const { login } = useAuth();
  const [validated, setValidated] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
          UserName: values.username,
          Password: values.password,
        };

        console.log(data);
    
        try {
          const response = await axios.post('https://localhost:44339/api/AuthClient/login', data); 
          
          toast.success("Login Successfully");

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
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

 return (
  <>
  <div className="row mt-5">
        <div className="d-flex justify-content-center align-items-center ">
          <div
            className="col-lg-6 col-md-6 col-12 bg-light border rounded p-2 p-md-3 p-lg-5 shadow-lg"
          >
            <div className="row">
              <h2 className="text-center">Login</h2>
            </div>
            <div className="row">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="validationUsername" className="mb-4 ">
        <Form.Label>UserName</Form.Label>
        <InputGroup
          hasValidation
          className="shadow-lg border border-1 rounded border-primary-subtle"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        >
          <div id="inputGroupPrepend" className="input-group-text">
          <FaUser/>
          </div>

          <Form.Control
            required
            type="text"
            placeholder="Username"
            defaultValue=""
          />
        </InputGroup>
      </Form.Group>
      <Form.Group controlId="validationUserPassword" className="mb-1">
        <Form.Label>Password</Form.Label>
        <InputGroup
          hasValidation
          className="shadow-lg border border-1 rounded border-primary-subtle"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        >
          <div id="inputGroupPrepend" className="input-group-text">
          <FaLock />
          </div>

          <Form.Control
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
            required
          />
        </InputGroup>
      </Form.Group>
      <div className="row mb-3">
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex col-6 align-items-center">
            <p>
              <small>
                Forgot <Link to={"forgotpassword"}>Password</Link>
              </small>
            </p>
          </div>
          <div className="d-flex col-6 justify-content-end">
            <Button
              variant="outline-light"
              className="btn-sm"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible? <FaEyeSlash /> : <FaEye />}
            </Button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mb-2">
        <Button
          type="submit"
          className="btn btn-primary btn-rounded btn-md mb-2 shadow-lg"
          style={{ width: "100%" }}
        >
          Log in
        </Button>
      </div>
    </Form>
            </div>
          </div>
        </div>
      </div>
  </>
 )
}

export default Login;
