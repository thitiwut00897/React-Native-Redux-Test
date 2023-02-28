import { combineReducers, createStore, applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer";

const rootReducer = combineReducers({
  userReducer,
  });
   
  export const Store = createStore(rootReducer, applyMiddleware(thunk));