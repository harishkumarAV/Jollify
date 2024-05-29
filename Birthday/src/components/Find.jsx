import React, { useState, useEffect } from 'react';
import Explore from './Explore';
import InfoSection from './InfoSection';
import './Find.css';
import Spinner from './Spinner';
import ButtonAppBar from './NavBar';
import Footer from './Footer';

export default function Find() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
    <ButtonAppBar/>

      <h4 className='find-para'>Luxe Themes, Limitless Potential</h4>
      <InfoSection />
      <h4 className='info-para'>Best Themes, Crafted for you!</h4>
      <Explore />
      <h4 className='info-para'>Join our journey!</h4>
      <Spinner/>
      <Footer/>
    </div>
  );
}
