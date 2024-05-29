import React from 'react';
import myImage from '../assets/menu.png'; // Import your image
import './MenuPage.css';
const ImagePage = () => {
  return (
    <div className='image-container'>
      <h1>Image Page</h1>
      <img src={myImage} alt="My Image" />
    </div>
  );
};

export default ImagePage;
