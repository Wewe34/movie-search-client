import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {mockData} from '../mockData';
import {IResults} from './SearchResults';

function Watchlist() {

    const [watchlist, setWatchlist] = useState<IResults[]>(mockData);

    return (
        <Box sx={{padding:2}}>
            <Typography variant="h4" color="primary" sx={{paddingTop:3, paddingLeft:1}} >My Watchlist</Typography>
            {watchlist.length ? 
            <Box>
                <Box sx={{display: 'flex', flexWrap:"wrap"}}>
                        {watchlist.map((watchlistItem:any, index: number) => {
                            return  <Box key={index} sx={{display: 'flex', padding: 1}}> 
                                        <Box component="img"
                                            sx={{
                                            maxHeight: { xs: 200, md: 300 },
                                            maxWidth: { xs: 100, md: 175 },
                                            }}
                                            src={watchlistItem.poster}
                                        />
                                    </Box>
                        })}
                    </Box> 
                    <Box>
                        <Button sx={{margin:1, marginTop:3}}variant="contained" color="info">Download PDF</Button>
                    </Box>
            </Box>
            : <Typography variant="body1" color="primary" sx={{paddingTop:3, paddingLeft:2}} >You have no watchlist films</Typography> }
        </Box>
    )
}

export default Watchlist;