import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Footer from './Footer';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send('service_h958orh', 'template_czwl0k5', {
        from_email: email,
        message: message,
      }, 'NQ5KEm3Hrh_G2UZfs');
      
      alert('Email sent successfully!');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending email.');
    }
  };

  return (
    <div>
    <section className="contact">
    <h3>Give us a shout.</h3>
    <form onSubmit={handleSubmit}>
    <label>Email:</label>
    <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Message:</label>
        <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        ></textarea>
        <button type="submit">Send</button>
        </form>
        </section>
        </div>
        );
  <div>

  </div>
}

export default Contact;