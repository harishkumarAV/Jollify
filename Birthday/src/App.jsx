import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ButtonAppBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Explore from './components/Explore';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  
  return (
    <BrowserRouter>
    <ButtonAppBar/>
    <Routes>
    <Route path="/" exact element={<Welcome/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Terms" element={<TermsAndConditions/>} />
        <Route path="/Privacy" element={<PrivacyPolicy/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}
