import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
          console.log("Bienvenid@");
        })
        .catch((e) => {
          console.log("El usuario no existe");
        });
    };
  };


export const loginGoogle= () =>{

    return(dispatch) =>{
        const auth =getAuth()
        signInWithPopup(auth,google)
        .then(({user}) =>{
            dispatch(loginSincrono(user.uid, user.displayName))
            alert("holaa "+ user.displayName);
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
        dispatch(loginSincrono(user.uid, user.displayName));
        console.log(`Bienvenid@ ${user.displayName}`);

        const docRef = doc(db, "users", v4());
        const payload = {
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
export const loginSincrono =(id, displayname) =>{
    return{
            type: types.login,
            payload: {
                id,
                displayname
            }

    }

}