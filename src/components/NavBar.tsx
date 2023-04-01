import React, { useState } from "react";
import { 
    AppBar, 
    Button, 
    Typography, 
    Toolbar, 
    Box,
    TextField,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import {accent, dark } from '../styles';



function NavBar() {
    const [showSmallDeviceSearch, setShowSmallDeviceSearch] = useState(false);

    const smallDevice = useMediaQuery("(max-width:600px)");
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{ backgroundColor: `${dark}` }}>
                {showSmallDeviceSearch && smallDevice ? 
                <Box sx={{display: 'flex'}}>
                    <TextField
                        placeholder="Search Flixim"
                        sx={{flexGrow: 4, mx: 2, my: 2, backgroundColor: 'white', borderRadius: 2, minWidth:'200px'}}/> 
                    <CancelIcon onClick={() => setShowSmallDeviceSearch(false)} fontSize='large' sx={{flexGrow: 2, alignSelf: 'center'}} />
                </Box> :
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', flexGrow: 1}}>
                        <MenuIcon
                            fontSize="large"
                            sx={{ mr: 2, alignSelf: 'center' }}
                        >
                        </MenuIcon>
                        <Typography variant="h4" component="div" sx={{mr: 2, minWidth: '30px', color:`${accent}`}} >
                            Flixim
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex',flexGrow: 3}}>
                    {smallDevice ? 
                        <SearchIcon onClick={() => setShowSmallDeviceSearch(true)} sx={{my: 4, flexGrow: 3, alignSelf: 'center'}} /> :
                        <TextField
                            placeholder="Search Flixim"
                            sx={{flexGrow: 3, mx: 2, my: 2, backgroundColor: 'white', borderRadius: 2, minWidth:'200px'}}
                        />}
                     <Button sx={{flexGrow: 1, color: 'whitesmoke'}}>Sign In</Button>   
                    </Box>
                </Toolbar>}
            </AppBar>
        </Box>
    )
}

export default NavBar;