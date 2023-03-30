
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, ref, set } from "firebase/database"



const firebaseConfig = {
    apiKey: "AIzaSyCazGqGszrIhaR3o0CZV4BwuLiFQge6_v8",
    authDomain: "clone-ff4a8.firebaseapp.com",
    projectId: "clone-ff4a8",
    storageBucket: "clone-ff4a8.appspot.com",
    messagingSenderId: "5075507570",
    appId: "1:5075507570:web:243327ff8ef9c894d965eb",
    measurementId: "G-3Y89TSCL8C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };