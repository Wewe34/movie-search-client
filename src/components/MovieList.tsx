import React from "react";
import { Box, Typography } from "@mui/material";
import { IResults } from "./SearchResults";


interface IMovieListProps {
    movies: IResults[]
}

function MovieList(props: IMovieListProps) {
    
    let {movies} = props;

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
            <Typography variant="h4" color='primary' sx={{paddingY:3, paddingLeft:2}} >Movies</Typography>
               <Box sx={{display: 'flex', overflowX:'auto'}}>
                {movies.map((movie:any, index: number) => {
                    return  <Box key={index} sx={{display: 'flex', padding: 2}}> 
                                <Box component="img"
                                    sx={{
                                    maxHeight: { xs: 200, md: 300 },
                                    maxWidth: { xs: 100, md: 175 },
                                    }}
                                    src={movie.Poster}
                                />
                            </Box>
                })}
            </Box>
        </Box>
    )
}

export default MovieList;