import React from "react";
import { Box, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { clearRecentlyViewedHistory } from "../store/reducers/recentlyViewed";

function RecentlyViewed() {

    const recentlyViewed = useAppSelector((state) => state.recentlyViewed.recentlyViewedList);
    const dispatch = useAppDispatch();
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1, paddingBottom: 4,backgroundColor: 'black', color:'whitesmoke'}}>
            <Box sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                <Typography variant="h4" sx={{paddingTop:3, paddingLeft:2}} >Recently Viewed</Typography>
                <Typography variant="body1" sx={{padding:2, color: blue[500]}} onClick={() => dispatch(clearRecentlyViewedHistory())} >Clear History</Typography>
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
                                    src={viewed.Poster}
                                />
                            </Box>
                })}
            </Box> : <Typography variant="body1" sx={{paddingY:7, paddingLeft:2}} >You have no recently viewed movies</Typography> }
        </Box>   
    )
}

export default RecentlyViewed;