import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { IResults } from "./NavBar";
import SelectionDetails, { ISelectionDetails } from "./SelectionDetails";
import { Selection } from "../models/selection";
import { red, yellow } from "@mui/material/colors";
import MovieStripTape from "./MovieStripTape";
import { useAppSelector } from "../store/hooks";



interface IListProps {
    list: IResults[]
}

function SearchLists(props: IListProps) {
    const [selection, setSelection] = useState<ISelectionDetails>(new Selection());
    const [openSelection, setOpenSelection] = useState<boolean>(false);
    const user = useAppSelector((state) => state.user);
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
            {list.some((film) => film.Type === 'movie')? 
            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
                <Typography variant="h4" color='primary' fontWeight={'bold'} sx={{paddingY:3, paddingLeft:2}} >Movies</Typography>

                <Box sx={{display: 'flex', overflowX:'auto'}}>

                    {list.filter((film) => film.Type === 'movie').map((movie:any, index: number) => {
                               return <Box key={index}>
                                        <MovieStripTape />
                                        <Box sx={{display:"flex", flexDirection:"column", padding: 2, backgroundColor:'black',cursor:"pointer", height: '350px'}} onClick={() => getSelectionById(movie.imdbID)}>
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
            {list.some((film) => film.Type === 'series') ?
            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
                <Typography variant="h4" color='primary' fontWeight={'bold'} sx={{paddingY:3, paddingLeft:2}} >Series</Typography>
                <Box sx={{display: 'flex', overflowX:'auto'}}>
                    {list.filter((film) => film.Type === 'series').map((series:any, index: number) => {
                          return <Box key={index}>
                                    <MovieStripTape />
                                    <Box sx={{display:"flex", flexDirection:"column", padding: 2, backgroundColor:'black',cursor:"pointer", height: '350px'}} onClick={() => getSelectionById(series.imdbID)}>
                                                <Box component="img"
                                                    sx={{
                                                    maxHeight: { xs: 250},
                                                    maxWidth: { xs: 145},
                                                    "&:hover": {
                                                        transform: 'rotate(5deg) scale(1.1,1.1) translate(5px,20px)',
                                                        boxShadow: `10px 10px 115px ${yellow[200]} `
                                                    }
                                                    }}
                                                    src={series.Poster != "N/A" ? series.Poster : 'no-poster-available.jpeg'}
                                                />
                                                <Typography fontWeight={'bold'} sx={{maxWidth: '135px'}} color="primary">{series.Title}</Typography>
                                                <Typography color="primary">{series.Year}</Typography>
                                    </Box>
                                    <MovieStripTape />
                            </Box>
                    })}
                </Box>
            </Box> : ''}
            {list.some((film) => film.Type === 'episode')?
            <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
                <Typography variant="h4" color='primary' fontWeight={'bold'} sx={{paddingY:3, paddingLeft:2}} >Episodes</Typography>
                <Box sx={{display: 'flex', overflowX:'auto'}}>
                    {list.filter((film) => film.Type === 'episode').map((episode:any, index: number) => {
                        return <Box key={index} >
                                    <MovieStripTape />
                                    <Box sx={{display:"flex", flexDirection:"column", padding: 2, backgroundColor:'black',cursor:"pointer", height: '350px'}} onClick={() => getSelectionById(episode.imdbID)}>
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