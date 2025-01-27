import { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';

import { Header, MainTable } from './components';

import { getCats } from './api/cats';

const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats().then(setCats);
  }, []);

  return (
    <Container maxWidth="xl" disableGutters>
      <Header />
      <Box sx={{ padding: { xs: 1, md: 2, lg: 3 } }}>
        <Typography variant="h3" textAlign={'center'}>
          Explorer
        </Typography>
        <MainTable cats={cats} />
      </Box>
    </Container>
  );
};

export default App;
