import React from 'react';
import './Footer.css';
import pic from '../assets/1.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={pic} alt="Footer Logo" />
        <p>© 2024 Copyrights by Jollify. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/Privacy">Privacy Policy</a>
          <a href="/Terms">Terms and Conditions</a>
          <a href="/faqs">FAQs</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
