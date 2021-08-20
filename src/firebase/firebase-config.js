import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcdVOKVNHvyberOSCjnsAyJlU-cVUNIC4",
  authDomain: "react-app-cursos-jjborrelli.firebaseapp.com",
  projectId: "react-app-cursos-jjborrelli",
  storageBucket: "react-app-cursos-jjborrelli.appspot.com",
  messagingSenderId: "967747553951",
  appId: "1:967747553951:web:82e9b2d1e2b23d52af70aa",
  measurementId: "G-Z4WXX6YMMD",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
