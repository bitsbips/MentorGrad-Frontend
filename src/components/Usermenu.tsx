import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import BackdropLoader from './BackdropLoader';
import LogoutIcon from '@mui/icons-material/Logout';
const UserMenu = () => {
    const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 


  const handleMenuOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUserProfileClick = () => {
    navigate('/studentProfile')
  };
  const handleLogoutClick = () => {
    setIsLoading(true); 
    setTimeout(() => {
        localStorage.removeItem('@storage_Key');

      setIsLoading(false); 
      navigate('/login');
    }, 2000); 
  };


  return (
    <div >
      <IconButton
      style={{ backgroundColor: 'transparent' }}
        color="inherit"
        aria-label="user menu"
        onClick={handleMenuOpen}
        disableRipple // Disable the ripple effect on click
        disableFocusRipple // Disable the ripple effect on focus
      >
        <AccountCircleIcon fontSize="large" style={{color:'#5F61BE'}}/>
        <ArrowDropDownIcon fontSize="small" style={{marginTop:'5px'}}/>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          '.MuiPaper-root': {
            backgroundColor: '#F2F5F9', // Set your custom background color here
          },
        }}
       
      >
        <MenuItem onClick={handleUserProfileClick}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
      <BackdropLoader open={isLoading} />
    </div>
  );
};

export default UserMenu;
