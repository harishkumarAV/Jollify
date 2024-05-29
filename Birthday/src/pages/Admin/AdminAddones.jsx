import React, { useState } from 'react';
import './AdminAddones.css'; // Assuming you have a CSS file for this component
import Sidebar from './Sidebar';
import { Card, CardContent, TextField, Button, Box } from '@mui/material'; // Import Box component for layout

function AdminAddones() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [brand, setBrand] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your submission logic here
    console.log("Product Name:", productName);
    console.log("Product Price:", productPrice);
    console.log("Brand:", brand);
    // Clear form fields after submission
    setProductName('');
    setProductPrice('');
    setBrand('');
  };

  return (
    <div className="admin-add-ones">
      <Sidebar />
      <h4 className='admin-head'>Add Product</h4>
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="center">
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
              <TextField
                id="product-name"
                label="Product Name"
                variant="outlined"
                value={productName}
                onChange={handleProductNameChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <TextField
                id="product-price"
                label="Product Price"
                variant="outlined"
                value={productPrice}
                onChange={handleProductPriceChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <TextField
                id="brand"
                label="Brand"
                variant="outlined"
                value={brand}
                onChange={handleBrandChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <Button type="submit" variant="contained" color="primary">
                Add Product
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminAddones;
