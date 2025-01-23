import { useEffect } from 'react';
import { MainTable } from './components/MainTable';
import { Box, Typography } from '@mui/material';
import { getRandomCats, getRandomCatsImages } from './api/cats';

const App = () => {
  useEffect(() => {
    getRandomCats();
    getRandomCatsImages();
  }, []);

  return (
    <Box>
      <Typography variant="h3" textAlign={'center'}>
        Cats Explorer
      </Typography>
      <MainTable />
    </Box>
  );
};

export default App;
