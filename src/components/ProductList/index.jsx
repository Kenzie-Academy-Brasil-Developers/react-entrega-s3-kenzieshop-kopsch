import { ImageCard, DivHover, SpanTitle, SpanPrice, Button } from "./styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartThunk } from "../../store/modules/cart/thunks";

const ProductList = ({ item }) => {
  const { name, price, image } = item;
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const toVisible = () => setIsVisible(true);
  const toHidden = () => setIsVisible(false);

  const handleCart = () => {
    dispatch(addCartThunk(item));
  };

  return (
    <>
      <ImageCard
        src={image}
        alt={name}
        onMouseMove={toVisible}
        onMouseLeave={toHidden}
      />
      <SpanTitle>{name}</SpanTitle>
      <SpanPrice>
        {price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </SpanPrice>
      <DivHover
        isVisible={isVisible}
        onMouseMove={toVisible}
        onMouseLeave={toHidden}
        onClick={handleCart}
      >
        ADD TO CART
      </DivHover>
      <Button onClick={handleCart}>ADD TO CART</Button>
    </>
  );
};

export default ProductList;
