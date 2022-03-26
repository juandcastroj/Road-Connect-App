import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducers } from "../reducers/registerReducer";
import { routesReducer } from "../reducers/routesReducer";


const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    routes: routesReducer,
    login: loginReducer,
    register: registerReducers
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)