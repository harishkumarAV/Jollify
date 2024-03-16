import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import bg from '../assets/burst.jpg';

function Signup() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNameError, setShowNameError] = useState(false);
  const [showMailError, setShowMailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false); 
  const handleSignUp = () => {
    setShowNameError(false);
    setShowMailError(false);
    setShowPasswordError(false);
    setShowConfirmPasswordError(false);

    if (name === '') {
      setShowNameError(true);
      return;
    }

    if (mail === '') {
      setShowMailError(true);
      return;
    }

    if (password === '') {
      setShowPasswordError(true);
      return;
    }

    if (confirmPassword === '') {
      setShowConfirmPasswordError(true);
      return;
    }

    if (password !== confirmPassword) {
      setShowPasswordError(true);
      setShowConfirmPasswordError(true);
      return;
    }

    setRegistrationSuccessful(true);
  };

  return (
    <div className='signup-body'>
    <div
    className="containerss"
    style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'right', backgroundSize: 'cover' }}
    >
    <div className="signup-form">
    <h2>SIGN UP</h2>
    <form>
    <div className={`form-group ${showNameError ? 'error' : ''}`}>
    <input
    type="text"
    id="name"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    {showNameError && <div className="error-message">Name is required</div>}
    </div>
    <div className={`form-group ${showMailError ? 'error' : ''}`}>
    <input
              type="email"
              id="mail"
              placeholder="Mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            {showMailError && <div className="error-message">Mail is required</div>}
          </div>
          <div className={`form-group ${showPasswordError ? 'error' : ''}`}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              {showPasswordError && <div className="error-message">Passwords do not match</div>}
              </div>
              <div className={`form-group ${showConfirmPasswordError ? 'error' : ''}`}>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {showConfirmPasswordError && (
              <div className="error-message">Passwords do not match</div>
            )}
          </div>

          {registrationSuccessful ? (
            <Link to="/">
            <button type="button" id="register-button">
            Register
            </button>
            </Link>
            ) : (
              <button type="button" id="register-button" onClick={handleSignUp}>
              Register
              </button>
              )}
              
              <p>
              Already have an account? <Link to="/">Login</Link>
              </p>
              </form>
              </div>
              </div>
              </div>
              );
}

export default Signup;