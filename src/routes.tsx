import { RouteSharp } from '@mui/icons-material';
import React from 'react';
import {
    Route,
    Navigate, Routes as Switch } from 'react-router-dom';
import Favorites from './components/Favorites';
import Watchlist from './components/Watchlist';
import SignIn from './components/SignIn';
import {useAppSelector} from './store/hooks';
import Home from './components/Home';
import SearchLists from './components/SearchLists';


  
function Routes() {

    const user = useAppSelector(state => state.user);
    
    return (
        <Switch>
            <Route path='/' element={<Home />}/>
            <Route path={`/search`} element={<SearchLists list={[]} />} />
            <Route path='/login' element={user.user.id.length ? <Navigate to="/"/> : <SignIn />}/>
            <Route path='/favorites' element={user.user.id.length ? <Favorites /> : <Navigate to="/login" />}/>
            <Route path='/watchlist' element={user.user.id.length ? <Watchlist /> : <Navigate to="/login" />}/>
        </Switch>
    )
}

export default Routes;