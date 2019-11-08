import { combineReducers } from "redux";
import storeReducer from "./storeReducer";
import cartReducer from "../reducers/cartReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  store: storeReducer,
  cart: cartReducer,
  auth: authReducer
});

export default rootReducer;
