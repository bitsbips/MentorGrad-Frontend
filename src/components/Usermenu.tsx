import React, { useState, useEffect } from 'react';
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

import userAvatarImage from '../../src/Assets/Images/clock.png';
import { jwtDecode } from '../helper-functions';
import {GetUserData} from '../api'

const UserMenu = () => {
  const user = jwtDecode(localStorage.getItem("@storage_Key"));
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userImage, setUserImage] = useState("");

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        GetUserData().then((response) =>
        setUserImage(response.profileDetails.profilePic)
      );
      console.log(userImage)
      } catch (error) {
        console.error("Error fetching user data:", (error as Error).message);
      }
    };

    fetchData();
  }, []);
  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUserProfileClick = () => {
    navigate('/profile');
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
    <div>
      <IconButton
        style={{ backgroundColor: 'transparent' }}
        color="inherit"
        aria-label="user menu"
        onClick={handleMenuOpen}
        disableRipple // Disable the ripple effect on click
        disableFocusRipple // Disable the ripple effect on focus
      >
        {userImage ? (
          <img src={userImage} alt="User Avatar" style={{ borderRadius: '15px', width: '40px', height: '40px' }} />
        ) : (
          <AccountCircleIcon fontSize="large" style={{ color: '#5F61BE' }} />
        )}        <ArrowDropDownIcon fontSize="small" style={{ marginTop: '5px' }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          '.MuiPaper-root': {
            backgroundColor: '#fffff', // Set your custom background color here
          },
        }}
      >
        {/* <MenuItem onClick={handleUserProfileClick}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
        </MenuItem> */}
        <MenuItem onClick={handleLogoutClick} sx={{ minWidth: 'fit-content' }}>
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
