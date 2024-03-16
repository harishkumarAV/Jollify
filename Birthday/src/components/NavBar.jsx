import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };
  const handleHomeClick = () =>{
    navigate("/Home");
    toggleDrawer(false);
  }
  const handleContactClick = () =>{
    navigate("/Contact");
    toggleDrawer(false);
  }
  const handleExplore = () =>{
    navigate("/Explore");
    toggleDrawer(false);
  }
  const handlejobClick = () => {
    navigate("/login");
    toggleDrawer(false);
  };
  const handleSignUp = () => {
    navigate("Signup");

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: ' -apple-system, BlinkMacSystemFont, sans-serif' }}>

          </Typography>
            <div className='button-con'>
            
            <Button className='temp' color="inherit" onClick={handlejobClick}>Login</Button>
            <Button color="inherit" onClick={handleSignUp}>Sign up</Button>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer  anchor="left" open={openDrawer } onClose={toggleDrawer(false)} >
        <div style={{ width: '250px' }}>
          <List>
          <center><br/></center>
            <ListItem button onClick={handleHomeClick}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handlejobClick}>
              <ListItemText primary="Book an Event" />
            </ListItem>
            <ListItem button onClick={handleExplore}>
              <ListItemText primary="Explore" />
            </ListItem>
            <ListItem button onClick={handleContactClick}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
          </div>
      </Drawer>

    </Box>
  );
}
