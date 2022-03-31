import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
 
  const firebaseConfig = {
    apiKey: "AIzaSyCNBjILpMSgJuLp6NKdbFI8fjHjso94cnE",
    authDomain: "frontend8-6efb3.firebaseapp.com",
    projectId: "frontend8-6efb3",
    storageBucket: "frontend8-6efb3.appspot.com",
    messagingSenderId: "252227685394",
    appId: "1:252227685394:web:084ae3569f7b4f9fe75ccb"
  };
  
const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    facebook,
    db
}