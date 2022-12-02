
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyv93G_3fcvFVcO3BSnsNFIJv0V1USGgg",
  authDomain: "react-clone-netflix-e4218.firebaseapp.com",
  projectId: "react-clone-netflix-e4218",
  storageBucket: "react-clone-netflix-e4218.appspot.com",
  messagingSenderId: "897432887348",
  appId: "1:897432887348:web:a8f4e68c7b5defb3e1aa61",
  measurementId: "G-1XE7Y6BT98"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)