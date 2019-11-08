import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";
import { Actions } from "../actions/shop";

import { Item } from "../store";

interface cartStore {
  cart: Item[];
}

const initState: cartStore = {
  cart: []
};
export default function cartReducer(
  state = initState,
  action: Actions
): cartStore {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("addtocart invoked");
      const item = { ...action.payload, cartSize: action.size };
      return state.cart
        ? {
            cart: [...state.cart, item]
          }
        : { cart: [item] };

    case REMOVE_FROM_CART:
      console.log("removeFromCart invoked");
      return {
        cart: state.cart.filter((item: Item) => {
          console.log(item === action.payload);
          return item !== action.payload;
        })
      };
    default:
      return state;
  }
}
