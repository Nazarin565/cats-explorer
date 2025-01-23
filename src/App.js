import { MainTable } from './components/MainTable';
import { Box, Typography } from '@mui/material';

const App = () => (
  <Box>
    <Typography variant="h3" textAlign={'center'}>
      Cats Explorer
    </Typography>
    <MainTable />
  </Box>
);

export default App;
