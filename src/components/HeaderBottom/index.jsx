import {
  BottomContainer,
  DivLeft,
  DivCenter,
  DivRight,
  BottomLink,
  DivSearch,
  InputStyled,
  ImageSearch,
  ImageLogo,
} from "./styles";

import logo from "../../assets/img/logo.png";

const HeaderBottom = () => {
  return (
    <BottomContainer>
      <DivLeft>
        <ImageLogo src={logo} alt="logo-store" />
      </DivLeft>
      <DivCenter>
        <BottomLink>TECLADOS</BottomLink>
        <BottomLink>BATERIAS</BottomLink>
        <BottomLink>LANÇAMENTOS</BottomLink>
        <BottomLink>BAIXOS</BottomLink>
      </DivCenter>
      <DivRight>
        <DivSearch>
          <ImageSearch
            src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"
            alt="icon-search"
          />
          <InputStyled type="text" placeholder="Procure o que deseja" />
        </DivSearch>
      </DivRight>
    </BottomContainer>
  );
};

export default HeaderBottom;
