import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material/styles';

import App from './App';
import { MainTable, Random, StartScreen, FavouritesTable } from './components';

import GlobalStyles from './GlobalStyles';

const theme = createTheme();

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<StartScreen />} />
          <Route path="explore" element={<MainTable />} />
          <Route path="random" element={<Random />} />
          <Route path="favourite" element={<FavouritesTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default Root;
