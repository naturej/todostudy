import { combineReducers } from "redux";
import todoReducer from "./todoSlice";

export const rootReducer = combineReducers({ todoReducer });
