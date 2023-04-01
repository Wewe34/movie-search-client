import React from 'react';
import './App.css';
import { Container, Box, createTheme, ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import NavBar from './components/NavBar';
import {theme} from './theme';
import MovieList from './components/MovieList';
import SearchResults from './components/SearchResults';

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
      <SearchResults />
    </ThemeProvider>
  );
}

export default App;
