import React from 'react';
import { LinearProgress, Box } from '@mui/material';

function Loader() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}

export default Loader;
