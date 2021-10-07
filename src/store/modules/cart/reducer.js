import { ADD_CART } from "./actionTypes";
const initialValue = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.product];
    default:
      return state;
  }
};

export default cartReducer;
