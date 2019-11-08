import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authState } from "./reducers/authReducer";

export interface storeState {
  store: { store: Item[] };
  cart: { cart: Item[] };
  auth: authState;
}
export interface Item {
  id: number;
  type: string;
  name: string;
  description: string;
  size: string[];
  gender: string[];
  price: number;
  img: string;
  cartSize?: string;
}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
