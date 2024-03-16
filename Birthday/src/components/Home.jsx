import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Home() {
  const navigate = useNavigate();
  
  const handleLearnMoreClick = (section) => {
    if (!loggedIn) {
      alert('Login to use this function');
    } else {
      // You can navigate to the respective section if the user is logged in.
      // Example: navigate(`/ResumeMaker`) for the ResumeMaker section.
      if (section === 'Home') {
        navigate('/Home');
      } else if (section === 'Home') {
        navigate('/Home');
      } else if (section === 'Explore') {
        navigate('/Explore');
      }
    }
  };
  
  
  
  return (
    <div>
      <section className='HomePage'>
      <div className="container">
      <h1>Jollify.</h1>
      <div className='para-container'>
      <p className='p-c'>
        Welcome to Jollify – Your Ultimate Birthday Event Planner!  Let us be the maestro of your celebrations! Jollify is your go-to app for creating unforgettable birthday experiences. From personalized themes to seamless coordination with vendors and guests, we orchestrate every detail. Download now and let Jollify turn your special day into a symphony of joy and laughter.        </p>
        </div>
        
        <button className='smooth-scroll' onClick={() => handleLearnMoreClick('Home')}>
          Learn more
          </button>
          </div>

      <section id='scroll'>
        <div className="container second">
          <div className="item">
            <div className="img img-first"></div>
            <div className="card">
              <h3>How Jollify Works?</h3>
              <p className='para'>
              Jollify specializes in birthday celebrations, offering a seamless experience from theme selection to party day. Choose from a variety of birthday themes, connect with vendors, manage guest lists, and leave the rest to us. With Jollify, birthdays are transformed into unforgettable experiences.              </p>
              <button className='is' onClick={() => handleLearnMoreClick('Home')}>
              Learn more
              </button>
              </div>
              </div>
              <div className="item">
              <div className="img img-second"></div>
              <div className="card">
              <h3>Select Your Celebration Style</h3>
              <p className='para'>
              Craft a Celebration That Reflects Your Unique Style and Personality by Exploring Our Array of Exquisite Theme Options. From Whimsical Wonderlands to Glamorous Galas, Our Selection Ensures Your Celebration Stands Out. Let Your Imagination Soar as You Design an Event That Truly Represents You.            </p>
              <button className='is' onClick={() => handleLearnMoreClick('Explore')}>
              Learn more
              </button>
              </div>
              </div>
              <div className="item">
              <div className="img img-third"></div>
              <div className="card">
              <h3>Reserve Your Celebration</h3>
              <p className='para'>
              Set the Stage for Your Dream Celebration: Secure Your Preferred Date, Handpick Your Theme, and Indulge in Delightful Details with Effortless Ease! Reserve Your Celebration Today and Prepare for an Unforgettable Journey of Festivities and Fun!            </p>
              <button className='is' onClick={() => handleLearnMoreClick('Home')}>
                Learn more
                </button>
                </div>
          </div>
        </div>
        </section>
        </section>
        </div>
  );
}