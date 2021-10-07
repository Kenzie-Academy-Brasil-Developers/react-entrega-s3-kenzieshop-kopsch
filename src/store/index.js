import { combineReducers, createStore, applyMiddleware } from "redux";
import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";
import cartHiddenReducer from "./modules/cartvisibilty/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  isVisible: cartHiddenReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
