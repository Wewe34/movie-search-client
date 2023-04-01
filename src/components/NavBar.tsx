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



function NavBar() {
    const theme = useTheme();
    const [showSmallDeviceSearch, setShowSmallDeviceSearch] = useState(false);

    const smallDevice = useMediaQuery("(max-width:600px)");
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: `${theme.palette.background.default}`}} >
                {showSmallDeviceSearch && smallDevice ? 
                <Box sx={{display: 'flex'}}>
                    <TextField
                        placeholder="Search Flixim"
                        sx={{flexGrow: 4, mx: 2, my: 2, backgroundColor: `${theme.palette.primary.main}`, borderRadius: 2, minWidth:'200px'}}/> 
                    <CancelIcon onClick={() => setShowSmallDeviceSearch(false)} color='primary' fontSize='large' sx={{flexGrow: 2, alignSelf: 'center'}} />
                </Box> :
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', flexGrow: 1}}>
                        <MenuIcon
                            fontSize="large"
                            color='primary'
                            sx={{ mr: 2, alignSelf: 'center' }}
                        >
                        </MenuIcon>
                        <Typography variant="h5" component="div" color='secondary' sx={{mr: 2, minWidth: '30px' }} >
                            MovieXpress
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex',flexGrow: 3}}>
                    {smallDevice ? 
                        <SearchIcon onClick={() => setShowSmallDeviceSearch(true)} color='primary' sx={{my: 4, flexGrow: 3, alignSelf: 'center'}} /> :
                        <TextField
                            placeholder="Search"
                            color='secondary'
                            sx={{flexGrow: 3, mx: 2, my: 2, backgroundColor: `${theme.palette.primary.main}`, borderRadius: 2, minWidth:'200px'}}
                        />}
                     <Button sx={{flexGrow: 1, color: '#fff'}}>Sign In</Button>   
                    </Box>
                </Toolbar>}
            </AppBar>
        </Box>
    )
}

export default NavBar;