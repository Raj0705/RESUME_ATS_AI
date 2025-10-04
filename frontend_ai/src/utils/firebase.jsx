// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd1lsZVLq37B_tDxjoSgzySHvZFThDNFM",
  authDomain: "mernai-a0f44.firebaseapp.com",
  projectId: "mernai-a0f44",
  storageBucket: "mernai-a0f44.firebasestorage.app",
  messagingSenderId: "334733893137",
  appId: "1:334733893137:web:f5ec8c78ef9bea85dedbb0",
  measurementId: "G-LTTD75JLJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
