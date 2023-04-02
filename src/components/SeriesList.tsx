import React from "react";
import { Box, Typography } from "@mui/material";
import { IResults } from "./SearchResults";

interface ISeriesListProps {
    series: IResults[]
}

function SeriesList(props: ISeriesListProps) {
    
    let {series} = props;

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1}}>
            <Typography variant="h4" color='primary' sx={{paddingY:3, paddingLeft:2}} >Series</Typography>
               <Box sx={{display: 'flex', overflowX:'auto'}}>
                {series.map((show:any, index: number) => {
                    return  <Box key={index} sx={{display: 'flex', padding: 2}}> 
                                <Box component="img"
                                    sx={{
                                    maxHeight: { xs: 200, md: 300 },
                                    maxWidth: { xs: 100, md: 175 },
                                    }}
                                    src={show.Poster}
                                />
                            </Box>
                })}
            </Box>
        </Box>
    )
}

export default SeriesList;