import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase")
require("firebase/firestore")

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDyVfAOtwHX68ZFW7K__lUuKyx5xgoWR98",
    authDomain: "evernote-bbb60.firebaseapp.com",
    databaseURL: "https://evernote-bbb60.firebaseio.com",
    projectId: "evernote-bbb60",
    storageBucket: "evernote-bbb60.appspot.com",
    messagingSenderId: "371498432839",
    appId: "1:371498432839:web:90a07317b5d16d7e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
