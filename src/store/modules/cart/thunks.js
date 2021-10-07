import { addToCart, RemoveCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(list);
  return (
    !list.map((item) => item.name).includes(product.name) &&
    (list.push(product),
    localStorage.setItem("cart", JSON.stringify(list)),
    dispatch(addToCart(product)))
  );
};

export const removeCartThunk = (name) => (dispatch, getStore) => {
  const { cart } = getStore();
  const list = cart.filter((elm) => elm.name !== name);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(RemoveCart(list));
};
