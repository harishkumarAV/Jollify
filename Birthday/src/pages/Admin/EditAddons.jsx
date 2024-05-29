import React, { useState } from 'react';
import './EditAddons.css'; // Assuming you have a CSS file for this component
import Sidebar from './Sidebar';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material'; // Import Table components from MUI

function EditAddons() {
  // Sample addon data (static)
  const [addons, setAddons] = useState([
    { id: 1, name: 'Addon 1', price: '$5', brand: 'Brand A' },
    { id: 2, name: 'Addon 2', price: '$8', brand: 'Brand B' },
    { id: 3, name: 'Addon 3', price: '$10', brand: 'Brand C' },
    // Add more addon items as needed
  ]);

  // Function to handle addon edit
  const handleEditAddon = (id) => {
    // Handle edit logic here
    console.log("Edit Addon with ID:", id);
  };

  // Function to handle addon deletion
  const handleDeleteAddon = (id) => {
    // Handle delete logic here
    console.log("Delete Addon with ID:", id);
    // Update addon list after deletion (for static data)
    setAddons(addons.filter(addon => addon.id !== id));
  };

  return (
    <div className="admin-edit-addons">
      <Sidebar />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addons.map(addon => (
            <TableRow key={addon.id}>
              <TableCell>{addon.id}</TableCell>
              <TableCell>{addon.name}</TableCell>
              <TableCell>{addon.price}</TableCell>
              <TableCell>{addon.brand}</TableCell>
              <TableCell className="action-buttons">
                <Button variant="outlined" color="primary" onClick={() => handleEditAddon(addon.id)}>Edit</Button>
                <Button variant="outlined" color="error" onClick={() => handleDeleteAddon(addon.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default EditAddons;
