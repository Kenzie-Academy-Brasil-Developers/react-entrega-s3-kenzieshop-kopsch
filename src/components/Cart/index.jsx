import {
  ContainerCart,
  Background,
  CartContainer,
  TitleCart,
  Description,
  CartProduct,
} from "./styles";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);

  return (
    <ContainerCart>
      <Background />
      <CartContainer>
        <TitleCart>
          <Description>X</Description>
          <Description>CARRINHO</Description>
        </TitleCart>
        {cart.map((item, index) => {
          const { name, price, image } = cart;
          return (
            <CartProduct key={index}>
              <img src={image} alt={name} />

              <span>{name}</span>
              <span>{price}</span>
              <span>X</span>
            </CartProduct>
          );
        })}
      </CartContainer>
    </ContainerCart>
  );
};

export default Cart;
