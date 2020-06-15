import {userActiveReducer} from "./index";
import {combineReducers} from "redux";

export const appReducer = combineReducers({
    userActive: userActiveReducer
});