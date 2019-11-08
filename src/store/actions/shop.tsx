import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";
import { Item } from "../store";

type addToCart = {
  type: typeof ADD_TO_CART;
  payload: Item;
  size: string;
};
type removeFromCart = {
  type: typeof REMOVE_FROM_CART;
  payload: Item;
};
export const addToCart = (item: Item, size: string): addToCart => ({
  type: ADD_TO_CART,
  payload: item,
  size
});
export const removeFromCart = (item: Item): removeFromCart => ({
  type: REMOVE_FROM_CART,
  payload: item
});

export type Actions = addToCart | removeFromCart;
