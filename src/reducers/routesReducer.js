import { typeRoutes } from "../types/types"

const initialState = {
    routes: []
}

export const routesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case typeRoutes.registerRoute:
            return {
                routes: [action.payload]
            }
        case typeRoutes.listRoute:
            return{
                routes: [...action.payload]
            }
        case typeRoutes.deleteRoute:
            return{
                routes: state.routes.filter(rout => rout.nombre !== action.payload)
            }
        default:
                return state
    }
}