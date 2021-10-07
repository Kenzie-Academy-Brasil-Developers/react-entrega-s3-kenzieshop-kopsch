import ProductList from "../../components/ProductList";
import Aside from "../../components/Aside";
import Cart from "../../components/Cart";
import {
  CardProduct,
  DivProduct,
  DivMall,
  DivAside,
  FilterDesc,
} from "./styles";
import { useSelector } from "react-redux";

const Mall = () => {
  const { products, isVisible } = useSelector((state) => state);
  const categories = [
    "MODELO",
    "ANO",
    "COR",
    "CATEGORIA DE PRODUTO",
    "TECNOLOGIA",
    "GÊNERO",
    "OFERTAS",
  ];

  return (
    <DivMall>
      {isVisible && <Cart />}
      <DivAside>
        <FilterDesc>FILTROS</FilterDesc>
        {categories.map((category, index) => (
          <Aside key={index} category={category} />
        ))}
      </DivAside>
      <DivProduct>
        {products.map((item, index) => (
          <CardProduct key={index}>
            <ProductList item={item} />
          </CardProduct>
        ))}
      </DivProduct>
    </DivMall>
  );
};

export default Mall;
