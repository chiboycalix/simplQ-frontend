import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoadingIndicator from '../LoadingIndicator';
import styles from './loginButton.module.scss';

// Docs: https://auth0.com/docs/quickstart/spa/react
const LoginButton = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isAuthenticated) {
    return (
      <Button
        color="primary"
        onClick={() => logout({ returnTo: window.location.origin })}
        variant="outlined"
      >
        <Avatar id={styles.avatar} alt={user.name} src={user.picture} />
        &nbsp;&nbsp;Logout
      </Button>
    );
  }
  return (
    <Button color="primary" onClick={loginWithRedirect} variant="outlined">
      <Avatar id={styles.avatar} alt="user">
        {' '}
        <AccountCircleIcon />
      </Avatar>
      &nbsp;&nbsp;Login
    </Button>
  );
};

export default LoginButton;
