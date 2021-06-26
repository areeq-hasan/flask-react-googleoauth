// React.js Imports
import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// Utility Imports
import axios from 'axios';

// Style Imports
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

// Component Imports
import { ProfileButton } from "./components/ProfileButton";
import { Login } from './components/Login';
import { Profile } from './components/Profile';

axios.defaults.headers.common['X-Requested-With'] = 'XmlHttpRequest';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  }
}));

const ProtectedRoute = ({ children, authRequired, ...rest }) => {
  return (
    <Route {...rest}>
      {!authRequired ? children : <Redirect to='/login'></Redirect>}
    </Route>
  );
};

function App(props) {
  const classes = useStyles();

  const [authRequired, setAuthRequired] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [logoutError, showLogoutError] = useState(false);

  function handleLogout() {
    async function do_logout() {
      try {
        const result = await axios.delete('/api/profile');
        if (result.status === 200 || result.status === 204) setAuthRequired(true);
      } catch (e) {
        showLogoutError(true);
      }
    }
    do_logout();
  }

  useEffect(() => {
    async function fetchData() {
      if (!authRequired) {
        try {
          const r = await axios.get('/api/profile');
          setProfilePicture(r.data.picture);
        } catch (e) {
          if (e.response) {
            if (e.response.status === 401) setAuthRequired(true);
          }
        }
      } else setProfilePicture(null);
    };
    fetchData();
  }, [authRequired]);

  return (
    <>
      <CssBaseline />

      <AppBar postion="relative">
        <Toolbar>
          <Typography color="inherit" variant="h6" className={classes.title}>
            Flask-React Google OAuth2.0 Template
          </Typography>
          <ProfileButton
            handleLogout={handleLogout}
            authenticated={!authRequired}
            profilePicture={profilePicture}
          />
        </Toolbar>
      </AppBar>

      <HashRouter>
        <Switch>
          <Route path="/login">
            <Login
              authRequired={authRequired} setAuthRequired={setAuthRequired}
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            />
          </Route>
          <ProtectedRoute authRequired={authRequired} path="/">
            <Profile setAuthRequired={setAuthRequired} />
          </ProtectedRoute>
        </Switch>
      </HashRouter>

      <Snackbar
        open={logoutError}
        autoHideDuration={10000}
        onClose={() => showLogoutError(false)}
      >
        <Alert variant="filled" elevated={6} severity="error">
          Couldn't log out
        </Alert>
      </Snackbar>

    </>
  );
}

export default App;