import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAdminLogin = () => {
    navigate("/AdminLogin");
    handleClose();
  };

  const handleUserLogin = () => {
    navigate("/Login");
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>

          </Typography>
          <div className='button-con'>
            <Button className='temp' color="inherit" onClick={() => navigate("/Home")}>Home</Button>
            <Button className='temp' color="inherit" onClick={() => navigate("/find")}>Explore</Button>
            <Button color="inherit" onClick={() => navigate("/Contact")}>Contact</Button>
            <Button color="inherit" onClick={() => navigate("/Menu")}>Pricing</Button>
            <Button color="inherit" onClick={() => navigate("/Orders")}>Orders</Button>
            <Button className='temp' color="inherit" onClick={() => navigate("/Profile")}>Profile</Button>
            <Button className='temp' color="inherit" onClick={() => navigate("/Login")}>Login / Signup</Button>
          </div>
        </Toolbar>
      </AppBar>

      
    </Box>
  );
}
