import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Sidebar.css';

function Side() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
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
          <div className="sidebar-container">
            <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
              <div style={{ width: '250px', paddingLeft: '20px' }}>
                <div
                  style={{ cursor: 'pointer', paddingTop: '10px', paddingLeft: '200px' }}
                  onClick={toggleDrawer(false)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <List>
                  <ListItem button onClick={toggleDrawer(false)} >
                    <Link to="/AdminDashboard" style={{ textDecoration: "none" }}>
                      <ListItemText primary="Dashboard"  style={{ color: 'black' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button onClick={toggleDrawer(false)}>
                    <Link to="/AdminAddTheme" style={{ textDecoration: "none" }}>
                      <ListItemText primary="Add Theme" style={{ color: 'black' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button onClick={toggleDrawer(false)}>
                    <Link to="/AdminAddFood" style={{ textDecoration: "none" }}>
                      <ListItemText primary="Add Food" style={{ color: 'black' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button onClick={toggleDrawer(false)}>
                    <Link to="/AdminAddones" style={{ textDecoration: "none" }}>
                      <ListItemText primary="Add Add On's" style={{ color: 'black' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button onClick={toggleDrawer(false)}>
                    <Link to="/EditTheme" style={{ textDecoration: "none" }}>
                      <ListItemText primary="Edit Theme" style={{ color: 'black' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button onClick={toggleDrawer(false)}>
                    <Link to="/EditFood" style={{ textDecoration: "none" }}>
                      <ListItemText primary="Edit Food" style={{ color: 'black' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button onClick={toggleDrawer(false)}>
                    <Link to="/EditAddons" style={{ textDecoration: "none" }}>
                      <ListItemText primary="Edit AddOn's" style={{ color: 'black' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button onClick={toggleDrawer(false)}>
                    <Link to="/Login" style={{ textDecoration: "none" }}>
                      <ListItemText primary="Logout" style={{ color: 'black' }}/>
                    </Link>
                  </ListItem>
                </List>
              </div>
            </Drawer>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Side;
