import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Spinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '20px',
      }}
    >
      <CircularProgress sx={{ color: '#5F61BE', borderColor: '#5F61BE' }} />
    </Box>
  );
};

export default Spinner;
