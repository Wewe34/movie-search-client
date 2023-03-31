import React from "react";
import { 
    AppBar, 
    Grid, 
    Button, 
    Typography, 
    Toolbar, 
    Box,
    TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';



function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{display: 'flex'}}>
                    <Box sx={{display: 'flex'}}>
                        <MenuIcon
                            fontSize="large"
                            sx={{ mr: 2 }}
                        >
                        </MenuIcon>
                        <Typography variant="h6" component="div" sx={{mr: 2, minWidth: '30px'}} >
                            Flixim
                        </Typography>
                    </Box>
                        <TextField 
                            variant="filled"
                            placeholder="Search Movies"
                            sx={{flexGrow: 1, mx: 2}}
                        />
                        <Button color="inherit">Sign In</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;