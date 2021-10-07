import { ADD_CART, REMOVE_CART } from "./actionTypes";

export const addToCart = (product) => ({
  type: ADD_CART,
  product,
});

export const RemoveCart = (list) => ({
  type: REMOVE_CART,
  list,
});
