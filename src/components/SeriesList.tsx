import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { IResults } from "./SearchResults";
import { ISelectionDetails } from "./SelectionDetails";



interface ISeriesListProps {
    series: IResults[]
}

function SeriesList(props: ISeriesListProps) {
    const [selection, setSelection] = useState<ISelectionDetails | string>('');

    let {series} = props;

    const getSelectionById = async (imdbID: string) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_APIKEY}`);
            const data = await response.json();
            setSelection(data)    
        } catch (error) {
            throw error;
        }   
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
            <Typography variant="h4" color='primary' sx={{paddingY:3, paddingLeft:2}} >Series</Typography>
               <Box sx={{display: 'flex', overflowX:'auto'}}>
                {series.map((show:any, index: number) => {
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
    )
}

export default SeriesList;