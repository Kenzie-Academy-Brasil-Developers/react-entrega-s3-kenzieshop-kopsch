import {
  ContainerCart,
  Background,
  CartContainer,
  TitleCart,
  Description,
  CartProduct,
  TotalValue,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { removeCartThunk } from "../../store/modules/cart/thunks";
import { cartIsHidden } from "../../store/modules/cartvisibilty/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  return (
    <ContainerCart>
      <Background />
      <CartContainer>
        <TitleCart>
          <Description onClick={() => dispatch(cartIsHidden(false))}>
            X
          </Description>
          <Description>CARRINHO</Description>
        </TitleCart>
        {cart.map((item, index) => {
          const { name, price, image } = item;
          return (
            <CartProduct key={index}>
              <img src={image} alt={name} />

              <span>{name}</span>
              <span>
                {price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <span onClick={() => dispatch(removeCartThunk(name))}>X</span>
            </CartProduct>
          );
        })}
        <TotalValue>
          <span>Valor total:</span>{" "}
          {cart.reduce((acc, elm) => acc + elm.price, 0)}
        </TotalValue>
      </CartContainer>
    </ContainerCart>
  );
};

export default Cart;
