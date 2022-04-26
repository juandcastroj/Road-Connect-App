import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { google , facebook} from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { signInWithPopup } from "firebase/auth";
import { db } from "../firebase/firebaseConfig";
import { v4 } from "uuid";
import { setDoc, doc } from "firebase/firestore";


export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(loginSincrono(user.uid, user.displayName));
          alert("Bienvenid@, "+ user.displayName);
        })
        .catch((e) => {
          //console.log("El usuario no existe");
        });
    };
  };


export const loginGoogle= () =>{

    return(dispatch) =>{
        const auth =getAuth()
        signInWithPopup(auth,google)
        .then(({user}) =>{
            dispatch(loginSincrono(user.uid, user.displayName, user.photoURL))
           //console.log(user.uid, user.displayName, user.photoURL);
        })
        .catch(e=>{
            console.log(e)
        })
    }
}

export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then( async({ user }) => {
        console.log( user );
        dispatch(loginSincrono(user.uid, user.displayName, user.photoURL ));
        console.log(`Bienvenid@ ${user.displayName}`);

        const docRef = doc(db, "users", v4());
        const payload = {
          foto: user.photoURL,
          nombre: user.displayName,
          correo: user.email,
          acceso: true,
        };

        await setDoc(docRef, payload);
      })
      
      .catch((e) => {
        console.log(e);
      });
  };
};


export const registroEmailPasswordNombre = (email, password, displayname, image ) => {

  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
  
        await updateProfile(auth.currentUser, { displayName: displayname, photoURL: image });
        dispatch( loginSincrono( user.uid, user.displayName, user.photoURL  ))
        alert('se ha creado tu usuario, '+ user.displayName)
        })
        .catch(e =>{
            console.log(e)
        })
      }
  }

  
export const loginSincrono =(id, displayname, photo) =>{
    return{
            type: types.login,
            payload: {
                id,
                displayname,
                photo
            }
    }

}


export const logout = () => {

  return(dispatch) => {
      const auth = getAuth();
      signOut(auth)
      .then(() => {
          dispatch(logoutSync())
      })
      .catch(error => {
          console.log(error);
      })
  }
}


export const logoutSync = () => {
 return{
     type: types.logout,
 }
}