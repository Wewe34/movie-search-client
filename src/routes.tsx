import { RouteSharp } from '@mui/icons-material';
import React from 'react';
import {
    Route,
    redirect, Routes as Switch } from 'react-router-dom';
import Favorites from './components/Favorites';
import SearchResults from './components/SearchResults';
import Watchlist from './components/Watchlist';


  
function Routes() {

    return (
        <Switch>
            <Route path='/' element={<SearchResults/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/watchlist' element={<Watchlist/>}/>
        </Switch>
    )
}

export default Routes;