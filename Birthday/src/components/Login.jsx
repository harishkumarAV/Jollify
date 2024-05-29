import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/authenticate', {
        username,
        password
      });
      console.log(response);
      const { token } = response.data;
        
        localStorage.setItem("token", token);
  


      if (response.status === 200) {
        alert('Login successful!');
        navigate("/Home"); 
      } else {
        setError('Failed to login');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setError('Failed to login');
    }
  };

  return (
    <div className='login-body'>
      <div className="containers">
        <div className="login-form">
          <h3>LOGIN</h3>
          <form >
            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" id="login-button" onClick={handleLogin}>
              Login
            </button>
            <p>{error}</p>
            <p>
              <Link to="/ForgotPassword">Forgot Password?</Link>
            </p>
            <p>
              Don't have an account? <Link to="/SignUp">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
