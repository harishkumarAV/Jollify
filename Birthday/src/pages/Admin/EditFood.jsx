import React, { useState } from 'react';
import './EditFood.css'; // Assuming you have a CSS file for this component
import Sidebar from './Sidebar';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material'; // Import Table components from MUI

function EditFood() {
  // Sample food data (static)
  const [foods, setFoods] = useState([
    { id: 1, name: 'Food 1', imageUrl: 'https://example.com/image1.jpg', price: '$10' },
    { id: 2, name: 'Food 2', imageUrl: 'https://example.com/image2.jpg', price: '$15' },
    { id: 3, name: 'Food 3', imageUrl: 'https://example.com/image3.jpg', price: '$20' },
    { id: 4, name: 'Food 4', imageUrl: 'https://example.com/image4.jpg', price: '$25' },
    // Add more food items as needed
  ]);

  // Function to handle food edit
  const handleEditFood = (id) => {
    // Handle edit logic here
    console.log("Edit Food with ID:", id);
  };

  // Function to handle food deletion
  const handleDeleteFood = (id) => {
    // Handle delete logic here
    console.log("Delete Food with ID:", id);
    // Update food list after deletion (for static data)
    setFoods(foods.filter(food => food.id !== id));
  };

  return (
    <div className="admin-edit-food">
      <Sidebar />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Food Name</TableCell>
            <TableCell>Image URL</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.map(food => (
            <TableRow key={food.id}>
              <TableCell>{food.id}</TableCell>
              <TableCell>{food.name}</TableCell>
              <TableCell>{food.imageUrl}</TableCell>
              <TableCell>{food.price}</TableCell>
              <TableCell className="action-buttons">
                <Button variant="outlined" color="primary" onClick={() => handleEditFood(food.id)}>Edit</Button>
                <Button variant="outlined" color="error" onClick={() => handleDeleteFood(food.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default EditFood;
