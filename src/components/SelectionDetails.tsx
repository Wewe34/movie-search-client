import React, {useState} from "react";
import { Typography, Dialog, useTheme, Button } from "@mui/material";
import { Box } from "@mui/system";
import {mockData} from '../mockData';
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

function SelectionDetails() {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [genres, setGenres] = useState(['animation', 'cartoon']);
    const theme = useTheme();
    return (
        <Dialog PaperProps={{
                    style: {
                    backgroundColor: `${theme.palette.background.default}`,
                    },
                }}
                open={dialogOpen} 
                fullScreen={true}
                sx={{padding: 2}}>
            <CancelIcon onClick={() => setDialogOpen(false)} color='secondary' fontSize='large' sx={{alignSelf: 'flex-end', marginRight:2, marginTop:2}} />
            <Typography variant="h3" color='primary' sx={{padding: 2}}>{mockData[0].title}</Typography>
            <Box sx={{display: 'flex', flexWrap:"wrap", justifyContent: "space-between"}}>
                <Typography variant="h6" color='primary' sx={{padding: 2}}>Movie | 2023 | PG | 60mins </Typography>
                <Box sx={{display:"flex", paddingX: 2, paddingBottom: 2}}>
                    {genres.map((genre, index) => {
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
                    src={'shrek.JPG'}/>

                <Box>
                    <Typography variant="h6" color='primary' sx={{padding: 2}}>Your name and email address were configured automatically based
                        on your username and hostname. Please check that they are accurate.
                        You can suppress this message by setting them explicitly. Run the
                        following command and follow the instructions in your editor to edit
                        your configuration file
                    </Typography>
                    <Box sx={{display: "flex", flexWrap:"wrap"}}>
                        <Box sx={{display: 'flex', marginBottom: 3, paddingRight: 2}}>
                            <Box sx={{display: "flex", paddingRight: 3}}>
                                <StarRateIcon fontSize="large" sx={{color: yellow[500], marginLeft: 2, marginRight: 1}}/>
                                <Box sx={{display: "flex", alignSelf: 'flex-end'}}>
                                    <Typography variant="h5" color="primary" sx={{marginRight:.5}}>8.1/10</Typography>
                                    <Typography variant="body2" color="primary" sx={{alignSelf: 'center'}}>180k</Typography>
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
                <Typography>Top Cast: Cece Winans, Tom Hanks</Typography>
                <Typography>Directors: Timmy Culley, Yolanda Applen</Typography>
                <Typography>Writers: Helen Donty, Jackie Simmons</Typography>
            </Box>
        </Dialog>
    )
}

export default SelectionDetails;