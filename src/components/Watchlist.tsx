import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import SelectionDetails, { ISelectionDetails } from "./SelectionDetails";
import { Selection } from "../models/selection";
import WatchlistService from "../services/WatchlistService";
import { loadWatchlistToView } from "../store/reducers/watchlist";
import { PDFDownloadLink } from "@react-pdf/renderer";
import WatchlistPdfDocument from "./WatchlistPdfDocument";

function Watchlist() {

    const watchlist = useAppSelector((state) => state.watchlist.watchlistList);
    const user = useAppSelector((state) => state.user.user);
    const [selection, setSelection] = useState<ISelectionDetails>(new Selection());
    const [openSelection, setOpenSelection] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        WatchlistService.loadWatchlist(user.id).then((watchlist) => {
            dispatch(loadWatchlistToView(watchlist));
        })
    }, [])

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
        <Box sx={{padding:2, minHeight:'80vh'}}>
            <Typography variant="h4" color="primary" fontWeight={'bold'} sx={{paddingTop:3, paddingLeft:1}} >My Watchlist</Typography>
            {watchlist.length ? 
            <Box>
                <Box sx={{display: 'flex', flexWrap:"wrap"}}>
                        {watchlist.map((watchlistItem:any, index: number) => {
                            return  <Box key={index} sx={{display: 'flex', padding: 1,cursor:"pointer"}} onClick={() => getSelectionById(watchlistItem.imdbID)}> 
                                        <Box component="img"
                                            sx={{
                                            maxHeight: { xs: 200, md: 300 },
                                            maxWidth: { xs: 100, md: 175 },
                                            "&:hover": {
                                                transform: 'scale(1.1,1.1)',
                                            }
                                            }}
                                            src={watchlistItem.Poster}
                                        />
                                    </Box>
                        })}
                    </Box> 
                    <PDFDownloadLink document={<WatchlistPdfDocument watchlistList={watchlist} />} fileName="my-watchlist.pdf">
                        <Box>
                            <Button sx={{margin:1, marginTop:3}}variant="contained" color="info">Download PDF</Button>
                        </Box>
                    </PDFDownloadLink>
            </Box>
            : <Typography variant="body1" color="primary" sx={{paddingTop:3, paddingLeft:2}} >You have no watchlist films</Typography> }
            <SelectionDetails selection={selection} open={openSelection} toggleOpen={setOpenSelection} />
        </Box>
    )
}

export default Watchlist;