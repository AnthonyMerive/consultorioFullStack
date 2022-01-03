import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { citasReducer } from '../reducers/citasReducer'
import { loginReducer } from "../reducers/loginReducer";


const reducers = combineReducers({

    citas: citasReducer,
    login: loginReducer
})

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))

)