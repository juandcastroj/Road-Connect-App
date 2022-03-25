import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { typeRoutes } from "../types/types"


//CREATE NEW ROUTE
export const registerRouteAsync = ( newRoute ) => {

    return(dispatch) => {
        addDoc(collection(db,"rutasCiclismo"),newRoute)
        .then(resp => {
            dispatch(registerRouteSync(newRoute))
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const registerRouteSync = (rout) => {
    return{
        type: typeRoutes.registerRoute,
        payload: rout
    }
}

//LIST ROUTES
export const listRouteAsync = () => {

    return async (dispatch) => {
        const datos = await getDocs(collection(db,"rutasCiclismo"))
          const rutass = []
         datos.forEach((doc) => {
             rutass.push({
                  ...doc.data()
              })            
         }) 
        dispatch(listRouteSync(rutass))
    }
}

export const listRouteSync = ( routes ) => {
    return{
        type: typeRoutes.listRoute,
        payload: routes
    }
}

//DELETE ROUTE

export const deleteAsync = (nombre) => {
    return async (dispatch) => {
        const routCollection = collection(db, "rutasCiclismo")
         const q = query(routCollection, where("nombre", "==", nombre))
         const data = await getDocs(q)
         data.forEach((rout) => {
         deleteDoc(doc(db,"rutasCiclismo",rout.id))
         })
        dispatch(deleteSync(routCollection))
    }
}

export const deleteSync = (nombre) => {
    return{
        type: typeRoutes.deleteRoute,
        payload: nombre
    }
}