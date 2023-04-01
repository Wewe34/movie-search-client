import React from 'react';
import './App.css';
import { Container, Box, createTheme, ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import NavBar from './components/NavBar';
import {theme} from './theme';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: `${theme.palette.background.default}`},
        }}
      />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
