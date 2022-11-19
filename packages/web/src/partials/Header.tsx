import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <LocationOnIcon sx={{ mr: 2 }} />
      <Typography variant="h6" color="inherit" noWrap>
        Zip Challenge
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
