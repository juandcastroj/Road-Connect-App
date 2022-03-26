import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCJIRhTGorN9GHmxWI7k4dDo4JeY_tD3Z0",
//     authDomain: "road-connect-4704d.firebaseapp.com",
//     projectId: "road-connect-4704d",
//     storageBucket: "road-connect-4704d.appspot.com",
//     messagingSenderId: "1073998844335",
//     appId: "1:1073998844335:web:3ab9ad1a4e1cd4f8f19f5a"
//   };
 
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCNBjILpMSgJuLp6NKdbFI8fjHjso94cnE",
  //   authDomain: "frontend8-6efb3.firebaseapp.com",
  //   projectId: "frontend8-6efb3",
  //   storageBucket: "frontend8-6efb3.appspot.com",
  //   messagingSenderId: "252227685394",
  //   appId: "1:252227685394:web:084ae3569f7b4f9fe75ccb"
  // };

  const firebaseConfig = {
    apiKey: "AIzaSyAK1VxYTxpZeFrFrnYfw5j8O2vmtD1-meA",
    authDomain: "roadconnect-42585.firebaseapp.com",
    projectId: "roadconnect-42585",
    storageBucket: "roadconnect-42585.appspot.com",
    messagingSenderId: "691316355632",
    appId: "1:691316355632:web:7e9f409b5d6e69b8dab3f5"
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