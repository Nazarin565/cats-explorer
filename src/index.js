import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme } from '@mui/material/styles';

import App from './App';

import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

const theme = createTheme();

console.log(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
