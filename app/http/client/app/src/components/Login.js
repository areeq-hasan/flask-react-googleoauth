// React.js
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// Google Login
import { GoogleLogin } from 'react-google-login';

// Style Imports
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
    content: {
        textAlign: "center",
        marginTop: 40,
    },
}));

export function Login(props) {
    const classes = useStyles();
    const [loginError, setLoginError] = useState(false);

    function handleLoginSuccess(d) {
        async function completeAuth() {
            var profile = new FormData();
            profile.set("id_token", d.tokenObj.id_token)
            try {
                await axios.post('/api/profile', profile);
                props.setAuthRequired(false);
            } catch (e) {
                setLoginError(true);
            }
        }
        completeAuth();
    }

    function handleLoginFailure(d) {
        setLoginError(true);
    }

    // Redirect if authentication is done:
    if (!props.authRequired)
        return <Redirect to="/" />;

    return (
        <div className={classes.content}>
            <Typography
                variant="h5"
                gutterBottom={true}
            >Oops, you're not logged in!</Typography>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Google Login"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                cookiePolicy={"single_host_origin"}
                redirectUri="postmessage"
                scope="openid"
            />
            <Snackbar open={loginError} autoHideDuration={10000} onClose={() => setLoginError(false)}>
                <Alert elevation={6} severity="error" variant="filled">There was an error logging in.</Alert>
            </Snackbar>
        </div>
    );
}