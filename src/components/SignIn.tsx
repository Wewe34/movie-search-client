import React from "react";
import { Box } from "@mui/material";
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";
import {useAppDispatch} from '../store/hooks';
import { signInUser } from "../store/reducers/user";
import { Credentials } from "../models/credientials";



function SignIn() {
    const dispatch = useAppDispatch();
    return (
        <Box>
            <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
                const user : Credentials = jwtDecode(credentialResponse.credential as string);
                dispatch(signInUser({id: user.sub, name: user.given_name}));
                console.log(user)
            }}
            onError={() => {
                console.log('Signin Failed');
            }}
            useOneTap
            />;
        </Box>
    )
}

export default SignIn;