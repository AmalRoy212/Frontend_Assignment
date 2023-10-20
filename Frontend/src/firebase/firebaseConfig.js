// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCAivbf9dMQ-bWkwqNgzWG0zVoZnzMdwvI",
  authDomain: "frontendassignment-a1566.firebaseapp.com",
  projectId: "frontendassignment-a1566",
  storageBucket: "frontendassignment-a1566.appspot.com",
  messagingSenderId: "306150493369",
  appId: "1:306150493369:web:6328122e1bb0093ef09f68",
  measurementId: "G-PN8JRN7QX5"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app

