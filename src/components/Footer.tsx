import React from "react";
import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import RecentlyViewed from "./RecentlyViewed";

function Footer() {
    return (
        <Box sx={{backgroundColor: `${red[900]}`}}>
            <RecentlyViewed />
            <Box sx={{display:'flex', flexDirection: 'column', alignItems:'center', padding: 10}}>
                <Box sx={{display:'flex'}}>
                    <Typography color="primary" variant="h6" padding={2}>Help</Typography>
                    <Typography color="primary" variant="h6" padding={2}>Careers</Typography>
                    <Typography color="primary" variant="h6" padding={2}>Privacy</Typography>
                </Box>
                <Typography color="primary" paddingBottom={5}>© 1993 - 2023</Typography>
            </Box>
        </Box>
    )
}

export default Footer;