import { TopContainer, TopLinks, ImageCart, CartItems } from "./styles";

const HeaderTop = () => {
  return (
    <TopContainer>
      <TopLinks>Acompanhar pedidos</TopLinks>
      <TopLinks>Login / Registrar</TopLinks>
      <TopLinks>
        <ImageCart
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt="cart-icon"
        />
        <CartItems>0</CartItems>
      </TopLinks>
    </TopContainer>
  );
};

export default HeaderTop;
