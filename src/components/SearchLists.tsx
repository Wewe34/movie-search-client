import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { IResults } from "./SearchResults";
import SelectionDetails, { ISelectionDetails } from "./SelectionDetails";
import { Selection } from "../models/selection";
import { red, yellow } from "@mui/material/colors";
import MovieStripTape from "./MovieStripTape";



interface IListProps {
    list: {movies: IResults[], series: IResults[], episodes: IResults[]}
}

function SearchLists(props: IListProps) {
    const [selection, setSelection] = useState<ISelectionDetails>(new Selection());
    const [openSelection, setOpenSelection] = useState<boolean>(false);
    let {list} = props;

    const getSelectionById = async (imdbID: string) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_APIKEY}`);
            const data = await response.json();
            setSelection(data)  
            setOpenSelection(true);
        } catch (error) {
            throw error;
        }   
    }


    return (
        <Box minHeight={'50vh'} paddingBottom={10}>
            {list.movies.length ? 
            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
                <Typography variant="h4" color='primary' fontWeight={'bold'} sx={{paddingY:3, paddingLeft:2}} >Movies</Typography>

                <Box sx={{display: 'flex', overflowX:'auto'}}>

                    {list.movies.map((movie:any, index: number) => {
                               return <Box sx={{}}>
                                        <MovieStripTape />
                                        <Box key={index} sx={{display:"flex", flexDirection:"column", padding: 2, backgroundColor:'black',cursor:"pointer", height: '350px'}} onClick={() => getSelectionById(movie.imdbID)}>
                                                    <Box component="img"
                                                        sx={{
                                                        maxHeight: { xs: 250},
                                                        maxWidth: { xs: 145},
                                                        "&:hover": {
                                                            transform: 'rotate(5deg) scale(1.1,1.1) translate(5px,20px)',
                                                            boxShadow: `10px 10px 115px ${yellow[200]} `
                                                        }
                                                        }}
                                                        src={movie.Poster != "N/A" ? movie.Poster : 'no-poster-available.jpeg'}
                                                    />
                                                    <Typography fontWeight={'bold'} sx={{maxWidth: '135px'}} color="primary">{movie.Title}</Typography>
                                                    <Typography color="primary">{movie.Year}</Typography>
                                        </Box>
                                        <MovieStripTape />
                                </Box>
                    })}
                </Box>
            </Box> : ''}
            {list.series.length ?
            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
                <Typography variant="h4" color='primary' fontWeight={'bold'} sx={{paddingY:3, paddingLeft:2}} >Series</Typography>
                <Box sx={{display: 'flex', overflowX:'auto'}}>
                    {list.series.map((show:any, index: number) => {
                          return <Box sx={{}}>
                                    <MovieStripTape />
                                    <Box key={index} sx={{display:"flex", flexDirection:"column", padding: 2, backgroundColor:'black',cursor:"pointer", height: '350px'}} onClick={() => getSelectionById(show.imdbID)}>
                                                <Box component="img"
                                                    sx={{
                                                    maxHeight: { xs: 250},
                                                    maxWidth: { xs: 145},
                                                    "&:hover": {
                                                        transform: 'rotate(5deg) scale(1.1,1.1) translate(5px,20px)',
                                                        boxShadow: `10px 10px 115px ${yellow[200]} `
                                                    }
                                                    }}
                                                    src={show.Poster != "N/A" ? show.Poster : 'no-poster-available.jpeg'}
                                                />
                                                <Typography fontWeight={'bold'} sx={{maxWidth: '135px'}} color="primary">{show.Title}</Typography>
                                                <Typography color="primary">{show.Year}</Typography>
                                    </Box>
                                    <MovieStripTape />
                            </Box>
                    })}
                </Box>
            </Box> : ''}
            {list.episodes.length ?
            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
                <Typography variant="h4" color='primary' fontWeight={'bold'} sx={{paddingY:3, paddingLeft:2}} >Episodes</Typography>
                <Box sx={{display: 'flex', overflowX:'auto'}}>
                    {list.episodes.map((episode:any, index: number) => {
                        return <Box sx={{}}>
                                    <MovieStripTape />
                                    <Box key={index} sx={{display:"flex", flexDirection:"column", padding: 2, backgroundColor:'black',cursor:"pointer", height: '350px'}} onClick={() => getSelectionById(episode.imdbID)}>
                                                <Box component="img"
                                                    sx={{
                                                    maxHeight: { xs: 250},
                                                    maxWidth: { xs: 145},
                                                    "&:hover": {
                                                        transform: 'rotate(5deg) scale(1.1,1.1) translate(5px,20px)',
                                                        boxShadow: `10px 10px 115px ${yellow[200]} `
                                                    }
                                                    }}
                                                    src={episode.Poster != "N/A" ? episode.Poster : 'no-poster-available.jpeg'}
                                                />
                                                <Typography fontWeight={'bold'} sx={{maxWidth: '135px'}} color="primary">{episode.Title}</Typography>
                                                <Typography color="primary">{episode.Year}</Typography>
                                    </Box>
                                    <MovieStripTape />
                            </Box>
                    })}
                </Box>
            </Box> : ''}
            <SelectionDetails selection={selection} open={openSelection} toggleOpen={setOpenSelection} />
        </Box>
    )
}

export default SearchLists;