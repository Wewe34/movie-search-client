import React, {useState} from "react";
import { Typography, Dialog, useTheme, Button } from "@mui/material";
import { Box } from "@mui/system";
import {mockData} from '../mockData';
import CancelIcon from '@mui/icons-material/Cancel';

function SelectionDetails() {
    const [dialogOpen, setDialogOpen] = useState<boolean>(true);
    const [genres, setGenres] = useState(['animation', 'cartoon']);
    const theme = useTheme();
    return (
        <Dialog PaperProps={{
                    style: {
                    backgroundColor: `${theme.palette.background.default}`,
                    },
                }}
                open={dialogOpen} 
                fullScreen={true}>
            <CancelIcon onClick={() => setDialogOpen(false)} color='secondary' fontSize='large' sx={{alignSelf: 'flex-end', marginRight:2, marginTop:2}} />
            <Typography variant="h3" color='primary' sx={{padding: 2}}>{mockData[0].title}</Typography>
            <Typography variant="h6" color='primary' sx={{padding: 2}}>Movie | 2023 | PG | 60mins </Typography>
            <Box sx={{display: 'flex', padding: 2}}>
                {genres.map((genre, index) => {
                    return <Button key={index} variant='outlined' color="secondary" size="small" fullWidth={false} sx={{padding: 1, marginRight: 1}}>
                                {genre}
                        </Button>
                })}
            </Box>
            <Box component="img"
                sx={{
                maxHeight: { xs: 300, md: 300 },
                maxWidth: { xs: 200, md: 175 },
                paddingLeft: 2
                }}
                src={'shrek.JPG'}/>
            
        </Dialog>
    )
}

export default SelectionDetails;