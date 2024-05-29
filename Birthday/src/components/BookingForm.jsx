import React, { useState } from 'react';
import './BookingForm.css'; 
import { useNavigate } from 'react-router-dom';
function BookingForm({ theme }) {
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [alternatePhone, setAlternatePhone] = useState('');
  const [securityInfo, setSecurityInfo] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking confirmed for:', theme);
    setName('');
    setDOB('');
    setEmail('');
    setPhone('');
    setAddress('');
    setAlternatePhone('');
    setSecurityInfo('');
    setFavoriteColor('');
  };
  const handlePay=()=>{
    navigate('/Confirm');
  }

  return (
    <div className='Booking-mainbody'>
      <div className="booking-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Birthday Person's Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" value={dob} onChange={(e) => setDOB(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Alternate Phone:</label>
            <input type="tel" value={alternatePhone} onChange={(e) => setAlternatePhone(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Favorite Color:</label>
            <input type="text" value={favoriteColor} onChange={(e) => setFavoriteColor(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Additional note:</label>
            <textarea value={securityInfo} onChange={(e) => setSecurityInfo(e.target.value)} required />
            <small>We take your privacy seriously. Your information is secure with us.</small>
          </div>
          <button onClick={handlePay} type="submit" >Proceed To Payment</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
