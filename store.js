import { createStore, combineReducers } from "redux";

import MainReducer from "./src/store/mainReducer";

const root = combineReducers({ mainReducer: MainReducer });

export default createStore(root);
