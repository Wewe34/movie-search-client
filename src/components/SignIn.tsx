import React from "react";
import { Box, Typography } from "@mui/material";
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";
import {useAppDispatch} from '../store/hooks';
import { signInUser } from "../store/reducers/user";
import { Credentials } from "../models/credientials";
import { useNavigate } from "react-router-dom";



function SignIn() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <Box minHeight={'60vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Typography color="primary" variant="h5" paddingBottom={7}>Sign in with Google</Typography>
            <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
                window.sessionStorage.setItem('authToken', JSON.stringify(credentialResponse));
                const user : Credentials = jwtDecode(credentialResponse.credential as string);
                dispatch(signInUser({id: user.sub, name: user.given_name}));
                console.log(user)
            }}
            onError={() => {
                console.log('Signin Failed');
                navigate('/');
            }}
            useOneTap
            />;
            <Typography color="primary" variant="body1" paddingBottom={7}>Add To Favorites and Watchlist when you sign in.</Typography>
        </Box>
    )
}

export default SignIn;