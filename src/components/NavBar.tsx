import React, { useState } from "react";
import { 
    AppBar, 
    Button, 
    Typography, 
    Toolbar, 
    Box,
    TextField,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import HamburgerDrawer from "./HamburgerDrawer";
import SearchLists from "./SearchLists";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { signOutUser, userSearchInput } from "../store/reducers/user";
import { red } from "@mui/material/colors";




export interface IResults {
    Title: string,
    Year: string,
    imdbID: string,
    Poster: string,
    Type: string
}

function NavBar() {
    const user = useAppSelector((state) => state.user.user);
    const searchValue = useAppSelector((state) => state.user.searchInput);
    const [showSmallDeviceSearch, setShowSmallDeviceSearch] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [userInputError, setUserInputError] = useState<boolean>(false);
    const [noResultsFound, setNoResultsFound] = useState<boolean>(false);
    const [results, setResults] = useState<IResults[]>([]);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();

    const smallDevice = useMediaQuery("(max-width:600px)");

    const getMovies = async () => {
        
        try {
            setNoResultsFound(false);
            if (searchValue.length >= 3) {  
                setUserInputError(false);
                navigate({
                    pathname: "search",
                    search: createSearchParams({
                        q: `${searchValue}`
                    }).toString()
                });

                const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_APIKEY}`);
                const data = await response.json();
                console.log('data', data.Search)
                if (data.Search) {
                    setResults(data.Search);
                } else {

                    setNoResultsFound(true);
                }
                
             
            } else {
                setUserInputError(true);
                setResults([])
            }    
        } catch (error) {
            throw error;
        }
    }
    
    const handleCancelSmallDeviceSearch = () => {
        setShowSmallDeviceSearch(false);
        dispatch(userSearchInput(''))
    }

    const signOut = () => {
        dispatch(signOutUser());
        window.sessionStorage.removeItem('authToken');
        navigate('/');
    }

    const handleChange = (event: {target: {value: string}}) => {
        dispatch(userSearchInput(event.target.value))
    }

    window.onpopstate = () => {
        navigate('/');
    }


    return (
        <Box sx={{ flexGrow: 1, maxWidth: '100%'}}>
            <AppBar position="static" sx={{backgroundColor: `${theme.palette.background.default}`}} >
                {showSmallDeviceSearch && smallDevice ? 
                <Box sx={{display: 'flex'}}>
                    <TextField
                        value={searchValue}
                        placeholder="Search"
                        sx={{flexGrow: 4, mx: 2, my: 2, backgroundColor: `${theme.palette.primary.main}`, borderRadius: 2, minWidth:'200px'}}
                        onChange={(event) => handleChange(event)} /> 
                    <Button type="submit" sx={{color: `${red[900]}`, backgroundColor:`whitesmoke`, height:'55px', marginTop:'17px', cursor:'pointer'}} onClick={getMovies}>Search</Button>
                    <CancelIcon onClick={() => handleCancelSmallDeviceSearch()} color='primary' fontSize='large' sx={{flexGrow: 2, alignSelf: 'center'}} />
                </Box> :
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', flexGrow: 1}}>
                        <MenuIcon
                            fontSize="large"
                            color='primary'
                            sx={{ mr: 2, alignSelf: 'center', cursor:"pointer" }}
                            onClick={() => setDrawerOpen(true)}
                        >
                        </MenuIcon>
                        <HamburgerDrawer isOpen={drawerOpen} closeDrawer={setDrawerOpen}/>
                        <Box component="img"
                                            sx={{
                                            maxHeight: { xs: 200, md: 200 },
                                            maxWidth: { xs: 100, md: 100 },
                                            alignSelf: 'flex-end',
                                            cursor:"pointer"
                                            }}
                                            src={'/logo.png'}
                                            onClick={() => navigate('/')}
                                        />
                    </Box>
                    <Box sx={{display: 'flex',flexGrow: 3}}>
                    {smallDevice ? 
                        <SearchIcon onClick={() => setShowSmallDeviceSearch(true)} color='primary' sx={{my: 4, flexGrow: 3, alignSelf: 'center'}} /> :
                        <TextField
                            value={searchValue}
                            placeholder="Search"
                            color='secondary'
                            sx={{flexGrow: 3, mx: 2, my: 2, backgroundColor: `${theme.palette.primary.main}`, borderRadius: 2, minWidth:'200px'}}
                            onChange={(event) => handleChange(event)}
                        />
                    }
                    {!smallDevice ? 
                    <Button type="submit" sx={{color: `${red[900]}`, backgroundColor:`whitesmoke`, height:'55px', marginTop:'17px', cursor:'pointer'}} onClick={getMovies}>Search</Button> : ''}
                    {!user.id ? 
                     <Button sx={{flexGrow: 1, color: '#fff'}} onClick={() => navigate('/login') }>Sign In</Button> :
                     <Button sx={{flexGrow: 1, color: '#fff'}} onClick={() => signOut() }>Sign Out</Button> }  
                    </Box>
                </Toolbar>}
            </AppBar>
            <Box>
                <>
                 {userInputError ? 
                 <Typography sx={{textAlign:'center'}}color="secondary" variant="body1" margin={5}>**Please input 3 or more characters to search movies.</Typography> : ''}       
                {location.pathname === '/search' && noResultsFound === false ? <SearchLists list={results} /> : location.pathname === '/search' && noResultsFound ?  
                <Typography sx={{textAlign:'center'}}color="secondary" variant="body1" margin={5}>No Results Found.</Typography> : ''}
                </>
            </Box>
        </Box>
    )
}

export default NavBar;