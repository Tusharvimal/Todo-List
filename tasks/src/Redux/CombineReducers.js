import taskChange from "./Reducer";

import {combineReducers} from 'redux';
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";

const rootReducer = combineReducers({
    taskChange: taskChange,
    auth: authReducer,
    errors: errorReducer
})

export default rootReducer;