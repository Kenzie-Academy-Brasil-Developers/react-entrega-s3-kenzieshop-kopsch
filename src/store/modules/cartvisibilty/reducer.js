import { CART_HIDDEN } from "./actionTypes";
import { CART_VISIBLE } from "./actionTypes";

const cartHiddenReducer = (state = false, action) => {
  switch (action.type) {
    case CART_HIDDEN:
      return (state = true);
    case CART_VISIBLE:
      return (state = false);
    default:
      return state;
  }
};

export default cartHiddenReducer;
