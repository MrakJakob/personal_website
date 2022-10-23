import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLcplludHx9S306_jnR1z1nsn-2jNh37I",
    authDomain: "portfoliowebsite-2e53e.firebaseapp.com",
    projectId: "portfoliowebsite-2e53e",
    storageBucket: "portfoliowebsite-2e53e.appspot.com",
    messagingSenderId: "268705328703",
    appId: "1:268705328703:web:7947495836fb675602928a",
    measurementId: "G-ESH27W291V"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;  // timestamp for saving urls to firebase collection 

export { appFirestore, appStorage, timestamp };