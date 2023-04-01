import React from "react";
import { 
    AppBar, 
    Grid, 
    Button, 
    Typography, 
    Toolbar, 
    Box,
    TextField,
    useMediaQuery,
    createTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {accent, dark } from '../styles';



function NavBar() {
    const smallDevice = useMediaQuery("(max-width:600px)");
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{ backgroundColor: `${dark}` }}>
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
                    <SearchIcon sx={{flexGrow: 3, alignSelf: 'center'}} /> :
                        <TextField
                            placeholder="Search Flixim"
                            sx={{flexGrow: 3, mx: 2, my: 2, backgroundColor: 'white', borderRadius: 2, minWidth:'200px'}}
                        />}
                     <Button sx={{flexGrow: 1, color: 'whitesmoke'}}>Sign In</Button>   
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;