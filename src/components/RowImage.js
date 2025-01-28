import React from 'react';
import { Grid2 } from '@mui/material';

const RowImage = ({ row }) => {
  return (
    <Grid2 container justifyContent={'center'} width={'100%'}>
      <img src={row.url} alt={row.name} style={{ maxWidth: '100%' }} />
    </Grid2>
  );
};

export default RowImage;
