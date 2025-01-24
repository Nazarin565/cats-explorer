import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import { MainTable } from './components/MainTable';

import { getCats } from './api/cats';

const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats().then(setCats);
  }, []);

  return (
    <Box>
      <Typography variant="h3" textAlign={'center'}>
        Cats Explorer
      </Typography>
      <MainTable cats={cats} />
    </Box>
  );
};

export default App;
