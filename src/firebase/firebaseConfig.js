import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWTttAn2gqkyG0hBQsOEKTM9TaiAbMtNk",
  authDomain: "journal-app-react-aca17.firebaseapp.com",
  projectId: "journal-app-react-aca17",
  storageBucket: "journal-app-react-aca17.appspot.com",
  messagingSenderId: "385738449494",
  appId: "1:385738449494:web:e44dbd82429bd075a191f7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
