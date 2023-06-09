import React, { useEffect }  from 'react';
import './App.css';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import NavBar from './components/NavBar';
import {theme} from './theme';
import Routes from './routes';
import Footer from './components/Footer';
import { Credentials } from './models/credientials';
import jwtDecode from 'jwt-decode';
import { useAppDispatch} from './store/hooks';
import { signInUser } from './store/reducers/user';
import { useNavigate } from 'react-router-dom';




function App() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
    const authToken = window.sessionStorage.getItem('authToken');
    
    if (authToken) {
      const user : Credentials = jwtDecode(JSON.parse(authToken).credential as string);
      dispatch(signInUser({id: user.sub, name: user.given_name}));
    } 

  },[])

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
