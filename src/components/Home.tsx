import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../store/hooks";
import user from "../store/reducers/user";

function Home() {
    const user = useAppSelector((state) => state.user.user);
    return (
        <Box minHeight={'60vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Box component="img"
                sx={{
                maxHeight: { xs: 250},
                maxWidth: { xs: 145},
                }}
                src={'logo.png'}
            />
            {user.id ?
            <Typography color="primary" variant="h5" paddingBottom={7}>{`Hello, ${user.name}!`}</Typography> :
        ''}
        </Box>
    )
}

export default Home;