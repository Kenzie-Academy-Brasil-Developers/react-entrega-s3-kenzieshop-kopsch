import { addToCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  return (
    !list.map((item) => item.id).includes(product.id) &&
    (list.push(product),
    localStorage.setItem("cart", JSON.stringify(list)),
    dispatch(addToCart(product)))
  );
};
