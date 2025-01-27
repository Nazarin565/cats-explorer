import { Outlet } from 'react-router';
import { Container } from '@mui/material';

import { Header } from './components';

import { StyledContentBox } from './App.styles';

const App = () => (
  <Container maxWidth="xl" disableGutters>
    <Header />

    <StyledContentBox>
      <Outlet />
    </StyledContentBox>
  </Container>
);

export default App;
