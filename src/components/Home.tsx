import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../store/hooks";
import user from "../store/reducers/user";

function Home() {
    const user = useAppSelector((state) => state.user.user);
    return (
        <Box minHeight={'60vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            {user.id ?
            <Typography color="primary" variant="h5" paddingBottom={7}>{`Hello, ${user.name}!`}</Typography> :
        ''}
        </Box>
    )
}

export default Home;