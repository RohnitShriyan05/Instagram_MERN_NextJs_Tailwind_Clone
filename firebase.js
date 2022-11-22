import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsD4-KNzHO9fmdkSWQe1nCigxTlqXgTZY",
    authDomain: "instaclonenextjs.firebaseapp.com",
    projectId: "instaclonenextjs",
    storageBucket: "instaclonenextjs.appspot.com",
    messagingSenderId: "596392474259",
    appId: "1:596392474259:web:8dc277683e06dd67613f66",
    measurementId: "G-HZ231Z3GPJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
export const provider = new firebase.auth.GoogleAuthProvider();