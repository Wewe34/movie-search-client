import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import {IResults} from './SearchResults';
import {mockData} from '../mockData';
import { blue } from "@mui/material/colors";

function RecentlyViewed() {

    const [recentlyViewed, setRecentlyViewed] = useState<IResults[]>(mockData.slice(0,3));

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1, backgroundColor:"whitesmoke"}}>
            <Box sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                <Typography variant="h4" sx={{paddingTop:3, paddingLeft:2}} >Recently Viewed</Typography>
                <Typography variant="body1" sx={{padding:2, color: blue[500]}} >Clear History</Typography>
            </Box>
            {recentlyViewed.length ? 
               <Box sx={{display: 'flex', overflowX:'auto'}}>
                {recentlyViewed.map((viewed:any, index: number) => {
                    return  <Box key={index} sx={{display: 'flex', padding: 2}}> 
                                <Box component="img"
                                    sx={{
                                    maxHeight: { xs: 200, md: 300 },
                                    maxWidth: { xs: 100, md: 175 },
                                    }}
                                    src={viewed.poster}
                                />
                            </Box>
                })}
            </Box> : 'You have no recently viewed pages'}
        </Box>   
    )
}

export default RecentlyViewed;