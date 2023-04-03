import { Box } from "@mui/material";
import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";



function Home() {
    return (
        <Box>
            <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
                const user = jwtDecode(credentialResponse.credential as string);
                console.log(user)
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
            />;
        </Box>
    )
}

export default Home;