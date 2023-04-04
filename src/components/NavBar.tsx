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
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { signOutUser, userSearchInput } from "../store/reducers/user";




function NavBar() {
    const theme = useTheme();
    const [showSmallDeviceSearch, setShowSmallDeviceSearch] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const user = useAppSelector((state) => state.user.user);
    const searchValue = useAppSelector((state) => state.user.searchInput);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const smallDevice = useMediaQuery("(max-width:600px)");
    
    const handleCancelSmallDeviceSearch = () => {
        setShowSmallDeviceSearch(false);
        dispatch(userSearchInput(''))
    }

    const signOut = () => {
        dispatch(signOutUser());
        navigate('/');
    }

    const handleChange = (event: {target: {value: string}}) => {
        navigate('/');
        dispatch(userSearchInput(event.target.value))
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
                        />}
                    {!user.id ? 
                     <Button sx={{flexGrow: 1, color: '#fff'}} onClick={() => navigate('/login') }>Sign In</Button> :
                     <Button sx={{flexGrow: 1, color: '#fff'}} onClick={() => signOut() }>Sign Out</Button> }  
                    </Box>
                </Toolbar>}
            </AppBar>
        </Box>
    )
}

export default NavBar;