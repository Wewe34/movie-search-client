import React, {Dispatch, SetStateAction, useState} from "react";
import { Typography, Dialog, useTheme, Button } from "@mui/material";
import { Box } from "@mui/system";
import CancelIcon from '@mui/icons-material/Cancel';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { yellow, pink, red } from "@mui/material/colors";

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
    open: boolean;
    toggleOpen: Dispatch<SetStateAction<boolean>>
}

function SelectionDetails(props: ISelectionDetailsProps) {
    const theme = useTheme();
    const {selection, open, toggleOpen} = props;
    return (
        <Dialog PaperProps={{
                    style: {
                    backgroundColor: `${theme.palette.background.default}`,
                    },
                }}
                open={open} 
                fullScreen={true}
                sx={{padding: 2}}>
            <CancelIcon onClick={() => toggleOpen(false)} color='secondary' fontSize='large' sx={{alignSelf: 'flex-end', marginRight:2, marginTop:2}} />
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
                            <Box sx={{display: "flex", paddingRight: 3}}>
                                <StarRateIcon fontSize="large" sx={{color: yellow[500], marginLeft: 2, marginRight: 1}}/>
                                <Box sx={{display: "flex", alignSelf: 'flex-end'}}>
                                    <Typography variant="h5" color="primary" sx={{marginRight:.5}}>''</Typography>
                                    <Typography variant="body2" color="primary" sx={{alignSelf: 'center'}}>{selection.imdbVotes}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{display: 'flex'}}>
                                <ThumbUpAltOutlinedIcon fontSize="large" color="primary" sx={{marginLeft: 2, marginRight: 1}}/>
                                <Typography variant="h5" color="primary" sx={{marginRight:.5, alignSelf: "center"}}>Rate</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex'}}>
                            <Box sx={{display: 'flex', paddingRight: 6}}>
                                <FavoriteBorderOutlinedIcon fontSize="large" sx={{color: pink[400], marginLeft: 2, marginRight: 1}}  />
                                <Typography variant="h5" sx={{color: pink[400], marginRight:.5}}>Favorite</Typography>
                            </Box>
                            <Box>
                                <Button variant='outlined' color="info" size="small" fullWidth={false} sx={{padding: 1, marginRight: 1, backgroundColor: 'whitesmoke'}}>+ Watchlist</Button>
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