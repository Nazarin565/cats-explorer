import React from 'react';
import { Box } from '@mui/material';

const RowImage = ({ row }) => {
  return (
    <Box textAlign={'center'} width={''} sx={{ objectFit: 'contain' }}>
      <img src={row.url} alt={row.name} max-width="90%" />
    </Box>
  );
};

export default RowImage;
