import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css"

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '.bg-black' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="text-white" style={{ flexGrow: 1 }}>
          <strong>High Taxation Awareness</strong>
        </Typography>
        <Box display="flex" alignItems="center">
          <Link to="/" className="text-white text-decoration-none mr-5">
          <Typography variant="body1"> <FontAwesomeIcon icon={faHome} /> Home</Typography>
          </Link>
          <Link to="/about" className="text-white text-decoration-none mr-5">
            <Typography variant="body1"><FontAwesomeIcon icon={faInfoCircle} /> About</Typography>
          </Link>
          <Link to="/contact" className="text-white text-decoration-none mr-5">
            <Typography variant="body1"><FontAwesomeIcon icon={faEnvelope} /> Contact</Typography>
          </Link>
          <Link to="/people" className="text-white text-decoration-none mr-5">
            <Typography variant="body1"> <FontAwesomeIcon icon={faUsers} />People</Typography>
          </Link>
          
          <IconButton color="inherit" aria-label="notifications">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="contact">
            <ContactMailIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
