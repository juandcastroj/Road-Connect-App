import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCJIRhTGorN9GHmxWI7k4dDo4JeY_tD3Z0",
//     authDomain: "road-connect-4704d.firebaseapp.com",
//     projectId: "road-connect-4704d",
//     storageBucket: "road-connect-4704d.appspot.com",
//     messagingSenderId: "1073998844335",
//     appId: "1:1073998844335:web:3ab9ad1a4e1cd4f8f19f5a"
//   };
 
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
const db = getFirestore();

export{
    app,
    google,
    db
}