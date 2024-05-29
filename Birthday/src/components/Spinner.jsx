import React, { useEffect, useState } from 'react';
import './Spinner.css'
const Spinner = () => {

  useEffect(() => {
    const galleryImages = document.querySelectorAll('.item img');
    const lightbox = document.querySelector('.lightbox');

    const body = document.querySelector('body');

    galleryImages.forEach((img, index) => {
      img.addEventListener('click', function () {
        setCurrentIndex(index);
        updateLightbox(index);
        lightbox.style.display = 'flex';
        body.classList.add('prevent-background-scroll');
      });
    });

   
  }, []);

  return (
    <body>
      <section className="intro">
        <div className="intro-content">
          <h1 className="title">Where Ideas Take Flight!</h1>
          <p className="description">
            <span className="collage-art">Together We Create, Together We Celebrate</span>   Dive into discussions where every opinion matters, and every idea has the potential to sparkle. Let's pool our creativity, ignite inspiration, and craft birthday celebrations that exceed expectations. Join us in this journey of shared passion, where together, we create unforgettable memories one birthday bash at a time. 
          </p>
          <a href="https://discord.com/servers" className="btn">Join</a>
        </div>

        <div className="joincard-container">
          <div style={{ '--r': '-15', '--y': '40', '--x': '50' }} className="joincard">
            <img src="https://images.pexels.com/photos/7322296/pexels-photo-7322296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div style={{ '--r': '5', '--y': '-30', '--x': '30' }} className="joincard">
            <img src="https://images.pexels.com/photos/7299453/pexels-photo-7299453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/7299453/pexels-photo-7299453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div style={{ '--r': '15', '--y': '50', '--x': '0' }} className="joincard">
            <img src="https://images.pexels.com/photos/7265996/pexels-photo-7265996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </div>
      </section>

      <section className="featured" id="featured">

        <div className="lightbox">
          <div className="slide prev">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="img-container">
            <p>title</p>
            <img src="sample.jpg" alt="" />
          </div>
          <div className="slide next">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Spinner;
