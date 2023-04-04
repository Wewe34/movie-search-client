import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { clearRecentlyViewedHistory } from "../store/reducers/recentlyViewed";
import SelectionDetails, { ISelectionDetails } from "./SelectionDetails";
import { Selection } from "../models/selection";

function RecentlyViewed() {

    const recentlyViewed = useAppSelector((state) => state.recentlyViewed.recentlyViewedList);
    const [selection, setSelection] = useState<ISelectionDetails>(new Selection());
    const [openSelection, setOpenSelection] = useState<boolean>(false);
    const dispatch = useAppDispatch();

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
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', paddingX: 1, paddingBottom: 4,backgroundColor: 'black', color:'whitesmoke'}}>
            <Box sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                <Typography variant="h4" sx={{paddingTop:3, paddingLeft:2}} >Recently Viewed</Typography>
                <Typography variant="body1" sx={{padding:2, color: blue[500], cursor:"pointer"} } onClick={() => dispatch(clearRecentlyViewedHistory())} >Clear History</Typography>
            </Box> 
            {recentlyViewed.length ? 
               <Box sx={{display: 'flex', overflowX:'auto'}}>
                {recentlyViewed.map((viewed:any, index: number) => {
                    return  <Box key={index} sx={{display: 'flex', padding: 2, cursor:"pointer"}} onClick={() => getSelectionById(viewed.imdbID)}> 
                                <Box component="img"
                                    sx={{
                                    maxHeight: { xs: 200, md: 300 },
                                    maxWidth: { xs: 100, md: 175 },
                                    "&:hover": {
                                        transform: 'scale(1.1,1.1)',
                                    }
                                    }}
                                    src={viewed.Poster != "N/A" ? viewed.Poster : 'no-poster-available.jpeg'}
                                />
                            </Box>
                })}
            </Box> : <Typography variant="body1" sx={{paddingY:7, paddingLeft:2}} >You have no recently viewed movies</Typography> }
            <SelectionDetails selection={selection} open={openSelection} toggleOpen={setOpenSelection} />
        </Box>   
    )
}

export default RecentlyViewed;