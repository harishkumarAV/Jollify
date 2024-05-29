import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setShowUsernameError(false);
    setShowPasswordError(false);

    // Check if the provided username and password are 'admin'
    if (username !== 'admin' || password !== 'admin') {
      alert('Invalid username or password.');
      return;
    }

    // Assuming login is successful, store username in localStorage
    localStorage.setItem('username', username);

    alert('Login successful!');
    navigate("/Admin");
  };

  return (
    <div className='login-body'>
      <div className="containers">
        <div className="login-form">
          <h3>ADMIN LOGIN</h3>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
