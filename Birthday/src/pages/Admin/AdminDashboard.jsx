import React from 'react';
import './AdminDashboard.css';
import Sidebar from './Sidebar';
import { Card, CardContent, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function AdminDashboard() {
  // Sample data for counts and employee details
  const themeCount = 10;
  const foodCount = 25;
  const addOnCount = 5;

  const employeeDetails = [
    { name: 'Harish Kumar', username: 'harixshh', lastLogin: '2024-03-19 10:30:00' },
    { name: 'Jane Smith', username: 'jane.smith', lastLogin: '2024-03-18 15:45:00' },
    { name: 'Alice Johnson', username: 'alice.johnson', lastLogin: '2024-03-17 09:00:00' },
    // Add more employee details as needed
  ];

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <h4 className='dashboard-admin'>Hello Admin</h4>

      <div className="counts">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Themes
            </Typography>
            <Typography variant="body2" component="p">
              {themeCount}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Food
            </Typography>
            <Typography variant="body2" component="p">
              {foodCount}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Add-ons
            </Typography>
            <Typography variant="body2" component="p">
              {addOnCount}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className="employee-details">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
               Login Details
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Last Login</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employeeDetails.map((employee, index) => (
                    <TableRow key={index}>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.username}</TableCell>
                      <TableCell>{employee.lastLogin}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AdminDashboard;
