import React, { Dispatch, SetStateAction, useState } from "react";
import { Box, Divider, Drawer, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Navigate, useNavigate } from "react-router-dom";


interface IHamburgerDrawerProps {
    isOpen: boolean,
    closeDrawer: Dispatch<SetStateAction<boolean>>
}

function HamburgerDrawer(props: IHamburgerDrawerProps) {

    const {isOpen, closeDrawer} = props;
    const navigate = useNavigate();


    return (
        <>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={() => closeDrawer(false)}
                sx={{minWidth:'50%'}}
                >
                <Box sx={{paddingRight:7, paddingLeft:3, paddingY:3}} onClick={() => closeDrawer(false)}>
                    <Box sx={{display:"flex"}} onClick={() => navigate('/favorites')}>
                        <FavoriteIcon />
                        <Typography  sx={{paddingBottom:5, paddingLeft:2}}>My Favorites</Typography>
                    </Box>
                    <Box sx={{display:"flex"}} onClick={() => navigate('/watchlist')}>
                        <BookmarkOutlinedIcon/>
                        <Typography  sx={{paddingBottom:5, paddingLeft:2}}>My Watchlist</Typography>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default HamburgerDrawer;