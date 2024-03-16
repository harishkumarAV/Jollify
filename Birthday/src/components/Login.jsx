import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setShowUsernameError(false);
    setShowPasswordError(false);

    if (username === '') {
      setShowUsernameError(true);
      return;
    }

    if (password === '') {
      setShowPasswordError(true);
      return;
    }

    // Here you can add your login logic, like sending a request to your backend

    alert('Login successful!');
    navigate("/Home");
  };

  return (
    <div className='login-body'>
    <div className="containers">
    
    <div className="login-form">
    <h3>LOGIN</h3>
    <form>
          <div className={`form-group ${showUsernameError ? 'error' : ''}`}>
          <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
            {showUsernameError && <div className="error-message">Username not found</div>}
            </div>
            <div className={`form-group ${showPasswordError ? 'error' : ''}`}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              {showPasswordError && <div className="error-message">Password not found</div>}
              </div>
              <button type="button" id="login-button" onClick={handleLogin}>
              Login
              </button>
          <p>Don't have an account? <Link to="/SignUp"><button id="signup-button">Sign Up</button></Link></p>
        </form>
        </div>
        </div>
        </div>
  );
}

export default Login;
