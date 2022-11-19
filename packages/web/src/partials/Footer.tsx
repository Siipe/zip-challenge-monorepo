import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright ©{' '}
      <Link color="inherit" href="https://github.com/Siipe/zip-challenge-monorepo" target="_blank">
        Siipe/zip-challenge-monorepo
      </Link>{' '}
      {new Date().getFullYear()} <br />
      Powered by{' '}
      <Link color="inherit" href="https://www.zippopotam.us/#" target="_blank">
        zippopotam.us
      </Link>
    </Typography>
  </Box>
);

export default Footer;
