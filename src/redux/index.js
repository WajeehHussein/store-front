import handleCart from "./reducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from './middlewares/thunk'
const reducers = combineReducers({ handleCart });

const store = () => {
    return createStore(reducers, {}, applyMiddleware(thunk));
}

export default store;




