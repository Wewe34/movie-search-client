import React, {Dispatch, SetStateAction, useState} from "react";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { Typography, Dialog, useTheme, Button } from "@mui/material";
import { Box } from "@mui/system";
import CancelIcon from '@mui/icons-material/Cancel';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { yellow, pink, red, blue } from "@mui/material/colors";
import { addFavorite, removeFavorite } from "../store/reducers/favorites";
import { addToWatchlist, removeFromWatchlist } from "../store/reducers/watchlist";

export interface ISelectionDetails {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Poster: string;
    Ratings: {Source: string, Value: string}[]
    imdbVotes: string;
    imdbID: string;
    Type: string
}

interface ISelectionDetailsProps {
    selection: {
        Title: string;
        Year: string;
        Rated: string;
        Released: string;
        Runtime: string;
        Genre: string;
        Director: string;
        Writer: string;
        Actors: string;
        Plot: string;
        Poster: string;
        Ratings: {Source: string, Value: string}[]
        imdbVotes: string;
        imdbID: string;
        Type: string
    },
    open?: boolean;
    toggleOpen?: Dispatch<SetStateAction<boolean>>
}

function SelectionDetails(props: ISelectionDetailsProps) {
    const favorites = useAppSelector((state) => state.favorites.favoritesList);
    const watchlist = useAppSelector((state) => state.watchlist.watchlistList);
    const theme = useTheme();
    const {selection, open, toggleOpen} = props;
    const dispatch = useAppDispatch();
    return (
        <Dialog PaperProps={{
                    style: {
                    backgroundColor: `${theme.palette.background.default}`,
                    },
                }}
                open={open ? open : false} 
                fullScreen={true}
                sx={{padding: 2}}>
            <CancelIcon onClick={() => toggleOpen ? toggleOpen(false) : ''} color='secondary' fontSize='large' sx={{alignSelf: 'flex-end', marginRight:2, marginTop:2}} />
            <Typography variant="h3" color='primary' sx={{padding: 2}}>{selection.Title}</Typography>
            <Box sx={{display: 'flex', flexWrap:"wrap", justifyContent: "space-between"}}>
                <Typography variant="h6" color='primary' sx={{padding: 2}}>
                    {`${selection.Type} | ${selection.Year} | ${selection.Rated} | ${selection.Runtime}` }</Typography>
                <Box sx={{display:"flex", paddingX: 2, paddingBottom: 2}}>
                    {selection.Genre.split(', ').map((genre, index) => {
                        return <Typography color="secondary" key={index} sx={{border: `solid 1px ${red[900]}`, height:"fit-content", padding: 1, borderRadius: 2, marginRight: 2}}>{genre}</Typography>
                    })}
                </Box>
            </Box>
            <Box>
                <Box component="img"
                    sx={{
                    maxHeight: { xs: 300, md: 500 },
                    maxWidth: { xs: 200, md: 275 },
                    paddingLeft: 2
                    }}
                    src={selection.Poster}/>

                <Box>
                    <Typography variant="h6" color='primary' sx={{padding: 2}}>
                        {selection.Plot}
                    </Typography>
                    <Box sx={{display: "flex", flexWrap:"wrap"}}>
                        <Box sx={{display: 'flex', marginBottom: 3, paddingRight: 2}}>
                            <Box sx={{display: "flex", paddingRight: 6, paddingLeft: 2}}>
                                <Typography fontSize={20} fontWeight="bolder" sx={{marginRight:2,alignSelf: 'center', color:'black', backgroundColor:`${yellow[600]}`, paddingY:.1, paddingX:.5, borderRadius:1 }}>IMDb</Typography>
                                <Box sx={{display: "flex", alignSelf: 'flex-end'}}>
                                    <Typography variant="h5" color="primary" sx={{marginRight:.5}}>{selection.Ratings.length ? selection.Ratings[0].Value : ''}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex'}}>
                            <Box sx={{display: 'flex', alignSelf:'center', paddingRight: 3}} >
                                {favorites.some(favorite => favorite.imdbID === selection.imdbID) ? 
                                <FavoriteIcon fontSize="large" sx={{color: pink[400], marginLeft: 2, marginRight: 1}} onClick={() => dispatch(removeFavorite(selection))} /> :
                                <FavoriteBorderOutlinedIcon fontSize="large" sx={{color: pink[400], marginLeft: 2, marginRight: 1}} onClick={() => dispatch(addFavorite(selection))} /> 
                                }
                                <Typography variant="h5" sx={{color: pink[400], marginRight:.5}}>Favorite</Typography>
                            </Box>
                            <Box sx={{paddingRight: 1}}>
                            {watchlist.some(watchlistItem => watchlistItem.imdbID === selection.imdbID) ?
                                 <Box sx={{display:"flex"}} onClick={() => dispatch(removeFromWatchlist(selection))}>
                                    <BookmarkRemoveIcon fontSize="large" color="info" sx={{alignSelf:'center'}}/>
                                    <Typography variant="h5" color="info" sx={{padding: 1, marginRight: 2,color: blue[400]}} >Watchlist</Typography> 
                                </Box> :
                                <Box sx={{display:"flex"}} onClick={() => dispatch(addToWatchlist(selection))}>
                                    <BookmarkAddOutlinedIcon fontSize="large" color="info" sx={{alignSelf:'center'}}/>
                                    <Typography variant="h5" color="info" sx={{padding: 1, marginRight: 2,color: blue[400]}} >
                                        Watchlist</Typography> 
                                </Box> } 
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>

            <Box sx={{paddingY: 4, paddingX: 2, color:'white'}}>
                <Typography>{`Top Cast: ${selection.Actors}`}</Typography>
                <Typography>{`Directors: ${selection.Director}`}</Typography>
                <Typography>{`Writers: ${selection.Writer}`}</Typography>
            </Box>
        </Dialog>
    )
}

export default SelectionDetails;