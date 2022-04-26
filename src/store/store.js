import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routesReducer } from "../reducers/routesReducer";
import { userReducer } from "../reducers/userReducer";


const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    routes: routesReducer,
    user:  userReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)