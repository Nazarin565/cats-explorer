import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

import { Header, MainTable } from './components';

import { getCats } from './api/cats';
import { StyledContentBox } from './App.styles';

const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats().then(setCats);
  }, []);

  return (
    <Container maxWidth="xl" disableGutters>
      <Header />
      <StyledContentBox>
        <Typography variant="h3" textAlign={'center'}>
          Explorer
        </Typography>
        <MainTable cats={cats} />
      </StyledContentBox>
    </Container>
  );
};

export default App;
