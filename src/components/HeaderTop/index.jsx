import { TopContainer, TopLinks, ImageCart, CartItems } from "./styles";
import { cartIsVisible } from "../../store/modules/cartvisibilty/actions";
import { useDispatch, useSelector } from "react-redux";

const HeaderTop = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <TopContainer>
      <TopLinks>Acompanhar pedidos</TopLinks>
      <TopLinks>Login / Registrar</TopLinks>
      <TopLinks onClick={() => dispatch(cartIsVisible(false))}>
        <ImageCart
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt="cart-icon"
        />
        <CartItems>{cart.length}</CartItems>
      </TopLinks>
    </TopContainer>
  );
};

export default HeaderTop;
