import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import {mockData} from "../mockData";



function MovieList() {
    
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
            <Typography variant="h4" color='primary' sx={{paddingY:3}} >Movies</Typography>
               <Box sx={{display: 'flex', overflowX:'auto'}}>
                {mockData.map((movie:any) => {
                    return  <Box sx={{display: 'flex', padding: 2}}> 
                                <Box component="img"
                                    sx={{
                                    maxHeight: { xs: 200, md: 300 },
                                    maxWidth: { xs: 100, md: 175 },
                                    }}
                                    src={movie.poster}
                                />
                            </Box>
                })}
            </Box>
        </Box>
    )
}

export default MovieList;