import { CART_HIDDEN } from "./actionTypes";
import { CART_VISIBLE } from "./actionTypes";

export const cartIsVisible = (boolean) => ({
  type: CART_HIDDEN,
  boolean,
});

export const cartIsHidden = (boolean) => ({
  type: CART_VISIBLE,
  boolean,
});
