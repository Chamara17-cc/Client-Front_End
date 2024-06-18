import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (!isValidEmail || !isValidPassword) return;
    // Simulated login logic
    // In a real application, you would authenticate the user with a backend
    setIsLoggedIn(true);
    setSubmitted(true);
  };

  const handleEmailBlur = () => {
    setIsValidEmail(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setIsValidPassword(validatePassword(password));
  };

  const validateEmail = (email) => {
    // Email validation logic
    return email.includes('@');
  };

  const validatePassword = (password) => {
    // Password validation logic
    return password.length >= 8;
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5" id="form1">
            {!isLoggedIn && !submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="forms-inputs mb-4">
                  <span>Email or username</span>
                  <input
                    type="text"
                    className={`form-control ${!isValidEmail && 'is-invalid'}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleEmailBlur}
                  />
                  {!isValidEmail && <div className="invalid-feedback">A valid email is required!</div>}
                </div>
                <div className="forms-inputs mb-4">
                  <span>Password</span>
                  <input
                    type="password"
                    className={`form-control ${!isValidPassword && 'is-invalid'}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handlePasswordBlur}
                  />
                  {!isValidPassword && <div className="invalid-feedback">Password must be 8 characters!</div>}
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-dark w-100">
                    Login
                  </button>
                </div>
              </form>
            ) : (
              <div className="success-data">
                <div className="text-center d-flex flex-column">
                  <i className="bx bxs-badge-check"></i>
                  <span className="text-center fs-1">You have been logged in successfully</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
