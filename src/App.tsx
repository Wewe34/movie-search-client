import React  from 'react';
import './App.css';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import NavBar from './components/NavBar';
import {theme} from './theme';
import Routes from './routes';
import Footer from './components/Footer';
import MovieStripTape from './components/MovieStripTape';



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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
