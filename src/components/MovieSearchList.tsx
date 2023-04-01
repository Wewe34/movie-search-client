import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

const mockData = [
    {
        title: 'How to Kill a Mockingbird',
        poster: 'shrek.JPG',
        year: 2023 
    },
    {
        title: 'How to Kill a Mockingbird',
        poster: 'shrek.JPG',
        year: 2023 
    },
    {
        title: 'How to Kill a Mockingbird',
        poster: 'shrek.JPG',
        year: 2023 
    },
    {
        title: 'How to Kill a Mockingbird',
        poster: 'shrek.JPG',
        year: 2023 
    },
    {
        title: 'How to Kill a Mockingbird',
        poster: 'shrek.JPG',
        year: 2023 
    },
    {
        title: 'How to Kill a Mockingbird',
        poster: 'shrek.JPG',
        year: 2023 
    },
    {
        title: 'How to Kill a Mockingbird',
        poster: 'shrek.JPG',
        year: 2023 
    },
    {
        title: 'How to Kill a Mockingbird',
        poster: 'shrek.JPG',
        year: 2023 
    },
    {
        title: 'How to Kill a Mockingbird',
        poster: 'shrek.JPG',
        year: 2023 
    },
    {
        title: 'How to Kill a Mockingbird',
        poster: 'shrek.JPG',
        year: 2023 
    },
];


function MovieSearchList() {
    
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
            <Typography variant="h4" color='primary' sx={{padding:1}} >Movies</Typography>
            <Grid container rowSpacing={1}>
                {mockData.map(movie => {
                    return  <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center'}}> 
                                <Box component="img"
                                    sx={{
                                    maxHeight: { xs: 200, md: 300 },
                                    maxWidth: { xs: 100, md: 175 },
                                    }}
                                    src={movie.poster}
                                />
                            </Grid>
                })}
            </Grid>
        </Box>
    )
}

export default MovieSearchList;