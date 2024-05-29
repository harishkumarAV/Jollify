import React, { useState } from 'react';
import './EditTheme.css'; // Assuming you have a CSS file for this component
import Sidebar from './Sidebar';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material'; // Import Table components from MUI

function EditTheme() {
  // Sample theme data (static)
  const [themes, setThemes] = useState([
    { id: 1, name: 'Theme 1', age: '10', organizer: 'Organizer 1' },
    { id: 2, name: 'Theme 2', age: '15', organizer: 'Organizer 2' },
    { id: 3, name: 'Theme 3', age: '20', organizer: 'Organizer 3' },
    { id: 3, name: 'Theme 4', age: '25', organizer: 'Organizer 3' },
    { id: 3, name: 'Theme 5', age: '30', organizer: 'Organizer 3' },
    { id: 3, name: 'Theme 6', age: '35', organizer: 'Organizer 3' },
    { id: 3, name: 'Theme 7', age: '30', organizer: 'Organizer 3' },
    { id: 3, name: 'Theme 8', age: '30', organizer: 'Organizer 3' },
    { id: 3, name: 'Theme 9', age: '30', organizer: 'Organizer 3' },
  ]);

  // Function to handle theme edit
  const handleEditTheme = (id) => {
    // Handle edit logic here
    console.log("Edit Theme with ID:", id);
  };

  // Function to handle theme deletion
  const handleDeleteTheme = (id) => {
    // Handle delete logic here
    console.log("Delete Theme with ID:", id);
    // Update theme list after deletion (for static data)
    setThemes(themes.filter(theme => theme.id !== id));
  };

  return (
    <div className="admin-edit-theme">
      <Sidebar />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Theme Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Organizer</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {themes.map(theme => (
            <TableRow key={theme.id}>
              <TableCell>{theme.id}</TableCell>
              <TableCell>{theme.name}</TableCell>
              <TableCell>{theme.age}</TableCell>
              <TableCell>{theme.organizer}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" onClick={() => handleEditTheme(theme.id)}>Edit</Button>
                <Button variant="outlined" color="error" onClick={() => handleDeleteTheme(theme.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default EditTheme;
