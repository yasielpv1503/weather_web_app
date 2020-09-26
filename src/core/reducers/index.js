import { combineReducers } from 'redux';
import httpReducer from './httpReducer'
import { reducer as formReducer } from "redux-form";
import { routerReducer } from 'react-router-redux';
 
export default combineReducers({
    httpReducer,    
    routing: routerReducer,
    form: formReducer

});
