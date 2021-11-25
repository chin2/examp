import React from "react"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBubHuI84JhQijYbJK2RsJt_B3XHE1BlC8",
    authDomain: "assess-c776f.firebaseapp.com",
    projectId: "assess-c776f",
    storageBucket: "assess-c776f.appspot.com",
    messagingSenderId: "209411526720",
    appId: "1:209411526720:web:345ec7763420e6a4c78fa5",
    measurementId: "G-3DGLHL6MRC"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth, firebase as default };