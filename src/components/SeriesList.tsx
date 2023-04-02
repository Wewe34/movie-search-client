import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { IResults } from "./SearchResults";
import SelectionDetails, { ISelectionDetails } from "./SelectionDetails";



interface IListProps {
    list: {movies: IResults[], series: IResults[], episodes: IResults[]}
}

function SeriesList(props: IListProps) {
    const [selection, setSelection] = useState<ISelectionDetails>({
        Title: '',
        Year: '',
        Rated: '',
        Released: '',
        Runtime: '',
        Genre: '',
        Director: '',
        Writer: '',
        Actors: '',
        Plot: '',
        Poster: '',
        Ratings: [],
        imdbVotes: '',
        imdbID: '',
        Type: ''
    });
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
        <Box>

            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
                <Typography variant="h4" color='primary' sx={{paddingY:3, paddingLeft:2}} >Movies</Typography>
                <Box sx={{display: 'flex', overflowX:'auto'}}>
                    {list.movies.map((movie:any, index: number) => {
                        return  <Box key={index} sx={{padding: 2, backgroundColor:'black'}} onClick={() => getSelectionById(movie.imdbID)}>
                                    <Box component="img"
                                        sx={{
                                        maxHeight: { xs: 200, md: 300 },
                                        maxWidth: { xs: 100, md: 175 },
                                        }}
                                        src={movie.Poster != "N/A" ? movie.Poster : 'no-poster-available.jpeg'}
                                    />
                                    <Typography color="primary">{movie.Title}</Typography>
                                    <Typography color="primary">{movie.Year}</Typography>
                                </Box>
                    })}
                </Box>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
                <Typography variant="h4" color='primary' sx={{paddingY:3, paddingLeft:2}} >Series</Typography>
                <Box sx={{display: 'flex', overflowX:'auto'}}>
                    {list.series.map((show:any, index: number) => {
                        return  <Box key={index} sx={{padding: 2, backgroundColor:'black'}} onClick={() => getSelectionById(show.imdbID)}> 
                                    <Box component="img"
                                        sx={{
                                        maxHeight: { xs: 200, md: 300 },
                                        maxWidth: { xs: 100, md: 175 },
                                        }}
                                        src={show.Poster != "N/A" ? show.Poster : 'no-poster-available.jpeg'}
                                    />
                                </Box>
                    })}
                </Box>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
                <Typography variant="h4" color='primary' sx={{paddingY:3, paddingLeft:2}} >Episodes</Typography>
                <Box sx={{display: 'flex', overflowX:'auto'}}>
                    {list.episodes.map((episode:any, index: number) => {
                        return  <Box key={index} sx={{padding: 2, backgroundColor:'black'}} onClick={() => getSelectionById(episode.imdbID)}> 
                                    <Box component="img"
                                        sx={{
                                        maxHeight: { xs: 200, md: 300 },
                                        maxWidth: { xs: 100, md: 175 },
                                        }}
                                        src={episode.Poster != "N/A" ? episode.Poster : 'no-poster-available.jpeg'}
                                    />
                                </Box>
                    })}
                </Box>
            </Box>
            <SelectionDetails selection={selection} open={openSelection} toggleOpen={setOpenSelection}/>
        </Box>
    )
}

export default SeriesList;