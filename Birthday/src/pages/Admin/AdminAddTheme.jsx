import React, { useState } from 'react';
import './AdminAddTheme.css';
import Sidebar from './Sidebar';
import { Card, CardContent, TextField, Button, Box } from '@mui/material';
import axios from 'axios';

function AdminAddTheme() {
  const [themeName, setThemeName] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [bookingLink, setBookingLink] = useState('');

  const handleThemeNameChange = (event) => {
    setThemeName(event.target.value);
  };

  const handleAgeRangeChange = (event) => {
    setAgeRange(event.target.value);
  };

  const handleOrganizerNameChange = (event) => {
    setOrganizerName(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleBookingLinkChange = (event) => {
    setBookingLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/theme/create', {
        themeName,
        ageRange,
        organizerName,
        imageUrl,
        bookingLink
      });
      console.log('Theme added successfully:', response.data);
      // Clear form fields after submission
      setThemeName('');
      setAgeRange('');
      setOrganizerName('');
      setImageUrl('');
      setBookingLink('');
    } catch (error) {
      console.error('Error adding theme:', error);
    }
  };

  return (
    <div className="admin-add-theme">
      <Sidebar />
      <h4 className='admin-head'>Add Theme</h4>
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="center">
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
              <TextField
                id="theme-name"
                label="Theme Name"
                variant="outlined"
                value={themeName}
                onChange={handleThemeNameChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <TextField
                id="age-range"
                label="Age Range"
                variant="outlined"
                value={ageRange}
                onChange={handleAgeRangeChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <TextField
                id="organizer-name"
                label="Organizer Name"
                variant="outlined"
                value={organizerName}
                onChange={handleOrganizerNameChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <TextField
                id="image-url"
                label="Image URL"
                variant="outlined"
                value={imageUrl}
                onChange={handleImageUrlChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <TextField
                id="booking-link"
                label="Booking Link"
                variant="outlined"
                value={bookingLink}
                onChange={handleBookingLinkChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <Button type="submit" variant="contained" color="primary">
                Add Theme
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminAddTheme;
