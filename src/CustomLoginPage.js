// LoginPage.js
import firebase from 'firebase';
import React from 'react';
import { Login } from 'react-admin';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '#/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const CustomLoginPage = (props) => (
  <Login {...props}>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  </Login>
);

export default CustomLoginPage;
