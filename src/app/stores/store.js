import { createStore, combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import promise from 'redux-promise-middleware';

//Reducers
import { usersReducer } from '../reducers/usersReducer';
//import { userReducer } from '../reducers/userReducer';



const reducers = combineReducers({
    users: usersReducer,
    //user: userReducer
});


const store = createStore(reducers, composeWithDevTools(applyMiddleware(promise())));

export default store;