import { combineReducers } from 'redux';
import sampleReducer from "./sample";
import userInfo from "./userInfo";


const rootReducer = combineReducers({
    sampleReducer,
    userInfo
});

export default rootReducer;
