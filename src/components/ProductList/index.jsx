import { ImageCard, DivHover, SpanTitle, SpanPrice } from "./styles";
import { useState } from "react";

const ProductList = ({ props }) => {
  const { name, price, image } = props;
  const [isVisible, setIsVisible] = useState(false);

  const toVisible = () => setIsVisible(true);
  const toHidden = () => setIsVisible(false);

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
        onClick={() => window.alert("yey")}
      >
        ADD TO CART
      </DivHover>
    </>
  );
};

export default ProductList;
