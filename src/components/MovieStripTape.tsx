import React from "react";
import { Box } from "@mui/material";

function MovieStripTape() {
    return (
        <Box sx={{ 
            backgroundColor: 'black', 
            minWidth: '100%',
            maxHeight: '100px',
            display:"flex",
            justifyContent:"space-between"}}>
            <Box sx={{backgroundColor: 'white', height: '20px', width:'20px', margin:2, color: 'white'}}></Box>
            <Box sx={{backgroundColor: 'white', height: '20px', width:'20px', margin:2, color: 'white'}}></Box>
            <Box sx={{backgroundColor: 'white', height: '20px', width:'20px', margin:2, color: 'white'}}></Box>
            <Box sx={{backgroundColor: 'white', height: '20px', width:'20px', margin:2, color: 'white'}}></Box>
        </Box>
    )
}

export default MovieStripTape;