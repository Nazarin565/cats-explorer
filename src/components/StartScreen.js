import React from 'react';
import { Grid2, Typography } from '@mui/material';

const StartScreen = () => (
  <Grid2 container direction={'column'} alignItems={'center'} gap={4}>
    <Typography variant="h3">Welcome to the cat Explorer!</Typography>
    <Typography>
      {' '}
      Here you can choose a cat breed for yourself or look at random pictures of
      cats{' '}
    </Typography>
  </Grid2>
);

export default StartScreen;
