import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword() {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const sendOtp = () => {
        const generatedOtp = Math.floor(100000 + Math.random() * 900000); 
        console.log("OTP for", phone, "is:", generatedOtp); 

        setMessage('OTP sent successfully');
    };

    const verifyOtp = () => {
        const expectedOtp = '123456';
        if (otp === expectedOtp) {
            setMessage('Password reset successfully');
        } else {
            setMessage('Invalid OTP');
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <div className="input-group">
                <label>Phone Number:</label>
                <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <button onClick={sendOtp}>Send OTP</button>
            
            <div className="input-group">
                <label>OTP:</label>
                <input type="text" value={otp} onChange={e => setOtp(e.target.value)} />
            </div>
            <div className="input-group">
                <label>New Password:</label>
                <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            </div>
            <button onClick={verifyOtp}>Verify OTP & Reset Password</button>

            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default ForgotPassword;
