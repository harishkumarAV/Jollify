import React, { useEffect, useState } from 'react';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';
import BgVideo from '../assets/cake.mp4';

export default function Welcome() {
  const [loaded, setLoaded] = useState(false);
  const nav = useNavigate();

  const handleLogin = () => {
    nav("/Home");
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`welcome-container ${loaded ? 'loaded' : ''}`}>
      <video autoPlay loop muted className="bg-vid">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <p className="welcome-text">Welcome to Jollify.</p>
        <div className='button-container'>
          <button type="button" onClick={handleLogin}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
