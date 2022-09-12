import handleCart from "./reducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
const reducers = combineReducers({ handleCart });

const store = () => {
    return createStore(reducers);
}

export default store();




