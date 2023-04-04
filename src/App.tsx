import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import NavBar from './components/NavBar';
import {theme} from './theme';
import RecentlyViewed from './components/RecentlyViewed';
import Routes from './routes';
import PdfDownload from './components/PdfDocument';



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
      <Routes />
      <RecentlyViewed />
    </ThemeProvider>
  );
}

export default App;
