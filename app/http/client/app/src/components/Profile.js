// React.js
import React, { useEffect, useState } from 'react';

// Style Imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
    content: {
        textAlign: "center",
        marginTop: 40,
    },
}));

export function Profile(props) {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [authRequired, setAuthRequired] = [props.authRequired, props.setAuthRequired];

    useEffect(() => {
        async function fetchData() {
            try {
                const r = await axios.get('/api/profile')
                setName(r.data.name);
                setId(r.data.user_id);
            } catch (e) {
                if (e.response && e.response.status === 401) setAuthRequired(true);
            }
        };
        fetchData();
    }, [authRequired, setAuthRequired])

    if (name && id) {
        return (
            <div className={classes.content}>
                <Typography variant="h4">
                    Hello, {name}.
                </Typography>
                <Typography variant="body1">
                    Click your profile picture to log out.
                </Typography>
                <Typography variant="body1">
                    User ID: {id}.
                </Typography>
            </div>
        );
    } else return (
        <div className={classes.content}>
            <Typography variant="h5">
                Loading...
            </Typography>
        </div>
    );
}