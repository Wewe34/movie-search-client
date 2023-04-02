import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {mockData} from '../mockData';
import {IResults} from './SearchResults';

function Favorites() {

    const [favorites, setFavorites] = useState<IResults[]>(mockData);

    return (
        <Box>
            <Typography variant="h4" color="primary" sx={{paddingTop:3, paddingLeft:2}} >Favorites</Typography>
            {favorites.length ? 
               <Box sx={{display: 'flex', flexWrap:"wrap"}}>
                {favorites.map((favorite:any, index: number) => {
                    return  <Box key={index} sx={{display: 'flex', padding: 2}}> 
                                <Box component="img"
                                    sx={{
                                    maxHeight: { xs: 200, md: 300 },
                                    maxWidth: { xs: 100, md: 175 },
                                    }}
                                    src={favorite.poster}
                                />
                            </Box>
                })}
            </Box> : <Typography variant="body1" color="primary" sx={{paddingTop:3, paddingLeft:2}} >You currently have no favorites.</Typography> }
        </Box>
    )
}

export default Favorites;