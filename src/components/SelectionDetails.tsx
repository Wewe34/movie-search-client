import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { Typography, Dialog, useTheme, Button, AppBar } from "@mui/material";
import { Box } from "@mui/system";
import CancelIcon from '@mui/icons-material/Cancel';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { yellow, pink, red, blue } from "@mui/material/colors";
import { addFavorite, removeFavorite } from "../store/reducers/favorites";
import { addToWatchlist, removeFromWatchlist } from "../store/reducers/watchlist";
import { addToRecentlyViewed } from "../store/reducers/recentlyViewed";
import { useNavigate } from "react-router-dom";
import FavoritesService from "../services/FavoritesService";
import WatchlistService from "../services/WatchlistService";

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
    const user = useAppSelector((state) => state.user.user);
    const theme = useTheme();
    const {selection, open, toggleOpen} = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClose = () => {
        if (toggleOpen) {
            toggleOpen(false);
        }
        dispatch(addToRecentlyViewed(selection));
    }

    const addToFavorites = () => {
        if (user.id) {
            dispatch(addFavorite(selection))
            FavoritesService.addFavorite(user, selection);
        } else {
            if (toggleOpen) {
                toggleOpen(false)
            }
            navigate('/login');
            dispatch(addToRecentlyViewed(selection));
        }
    }

    const removeFromFavorites = () => {
        if(user) {
            dispatch(removeFavorite(selection))
            FavoritesService.removeFavorite(user.id, selection.imdbID);
        }
    }

    const addSelectionToWatchlist = () => {
        if (user.id) {
            dispatch(addToWatchlist(selection))
            WatchlistService.addToWatchlist(user, selection);
        } else {
            if (toggleOpen) {
                toggleOpen(false)
            }
            navigate('/login');
            dispatch(addToRecentlyViewed(selection));
            
        }
    }

    const removeSelectionFromWatchlist = () => {
        if(user) {
            dispatch(removeFromWatchlist(selection));
            WatchlistService.removeFromWatchlist(user.id, selection.imdbID);
        }
    }

    return (
        <Dialog PaperProps={{
                    style: {
                    backgroundColor: `${theme.palette.background.default}`,
                    },
                }}
                open={open ? open : false} 
                fullScreen={true}
                sx={{padding: 2, marginTop: 0}}>
            <CancelIcon onClick={() => handleClose()} color='primary' fontSize='large' sx={{alignSelf: 'flex-end', marginRight:2, marginTop:4,cursor:"pointer"}} />
            <Typography variant="h3" color='primary' sx={{padding: 2, paddingTop:0}}>{selection.Title != "N/A" ? selection.Title : 'Title Not Available'}</Typography>
            <Box sx={{display: 'flex', flexWrap:"wrap", justifyContent: "space-between"}}>
                <Typography variant="h6" color='primary' sx={{padding: 2}}>
                    {`${selection.Type != "N/A" ? selection.Type: 'Type:N/A'} · ${selection.Year != "N/A" ? selection.Year : 'Year:N/A'} · ${selection.Rated != "N/A" ? selection.Rated : 'Rated:N/A'} · ${selection.Runtime != "N/A" ? selection.Runtime : 'Runtime:N/A'}` }</Typography>
                <Box sx={{display:"flex", paddingX: 2, paddingBottom: 2}}>
                    {selection.Genre != "N/A" ? selection.Genre.split(', ').map((genre, index) => {
                        return <Typography color="secondary" key={index} sx={{border: `solid 1px ${red[900]}`, height:"fit-content", padding: 1, borderRadius: 2, marginRight: 2}}>{genre}</Typography>
                    }): ''}
                </Box>
            </Box>
            <Box>
                <Box component="img"
                    sx={{
                    maxHeight: { xs: 300, md: 500 },
                    maxWidth: { xs: 200, md: 275 },
                    paddingLeft: 2
                    }}
                    src={selection.Poster != "N/A" ? selection.Poster : 'no-poster-available.jpeg'}/>

                <Box>
                    <Typography variant="h6" color='primary' sx={{padding: 2}}>
                        {selection.Plot != "N/A" ? selection.Plot : 'No Plot Available at this time.'}
                    </Typography>
                    <Box sx={{display: "flex", flexWrap:"wrap"}}>
                        <Box sx={{display: 'flex', paddingRight: 1, paddingTop:2, justifyContent:'center'}}>
                            <Box sx={{display: "flex", paddingRight: 2, paddingLeft: 2}}>
                                <Typography fontSize={20} fontWeight="bolder" sx={{marginRight:2,alignSelf: 'center', color:'black', backgroundColor:`${yellow[600]}`, paddingY:.1, paddingX:.5, borderRadius:1 }}>IMDb</Typography>
                                <Box sx={{display: "flex", alignSelf: 'center'}}>
                                    <Typography variant="h5" color="primary" sx={{marginRight:.5}}>{selection.Ratings.length ? selection.Ratings[0].Value : 'Rating:N/A'}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', paddingTop:2}}>
                            <Box sx={{display: 'flex', alignSelf:'center', paddingRight: 3,cursor:"pointer"}} >
                                {favorites.some((favorite: ISelectionDetails) => favorite.imdbID === selection.imdbID) && user.id ? 
                                <FavoriteIcon fontSize="large" sx={{color: pink[400], marginLeft: 2, marginRight: 1}} onClick={() => removeFromFavorites()} /> :
                                <FavoriteBorderOutlinedIcon fontSize="large" sx={{color: pink[400], marginLeft: 2, marginRight: 1}} onClick={() => addToFavorites()} /> 
                                }
                                <Typography variant="h5" sx={{color: pink[400], marginRight:.5}}>Favorite</Typography>
                            </Box>
                            <Box sx={{paddingRight: 1,cursor:"pointer"}}>
                            {watchlist.some(watchlistItem => watchlistItem.imdbID === selection.imdbID) && user.id ?
                                 <Box sx={{display:"flex"}} onClick={() => removeSelectionFromWatchlist()}>
                                    <BookmarkRemoveIcon fontSize="large" color="info" sx={{alignSelf:'center'}}/>
                                    <Typography variant="h5" color="info" sx={{padding: 1, marginRight: 2,color: blue[400]}} >Watchlist</Typography> 
                                </Box> :
                                <Box sx={{display:"flex"}} onClick={() => addSelectionToWatchlist()}>
                                    <BookmarkAddOutlinedIcon fontSize="large" color="info" sx={{alignSelf:'center'}}/>
                                    <Typography variant="h5" color="info" sx={{padding: 1, marginRight: 2,color: blue[400]}} >
                                        Watchlist</Typography> 
                                </Box> } 
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>

            <Box sx={{paddingY: 5, paddingX: 2, color:'white'}}>
                <Typography>{`Top Cast: ${selection.Actors}`}</Typography>
                <Typography>{`Directors: ${selection.Director}`}</Typography>
                <Typography>{`Writers: ${selection.Writer}`}</Typography>
            </Box>
        </Dialog>
    )
}

export default SelectionDetails;