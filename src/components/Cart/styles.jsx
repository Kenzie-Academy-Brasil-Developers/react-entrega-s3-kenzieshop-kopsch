import styled from "styled-components";

export const ContainerCart = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 30;
  display: flex;
`;

export const Background = styled.div`
  width: 75%;
  height: 100%;
  background: #000000ce;
`;

export const CartContainer = styled.div`
  width: 25%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-flow: column nowrap;
`;

export const TitleCart = styled.div`
  width: 100%;
  height: 45px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Description = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 16pt;

  &:first-child {
    margin-left: 15px;
    cursor: pointer;
  }
  &:last-child {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CartProduct = styled.div`
  width: 85%;
  height: 60px;
  background: #ececec;
  margin: 20px auto;
  display: flex;
  align-items: center;

  img {
    width: 17%;
  }

  span:nth-of-type(1) {
    font-size: 7pt;
    width: 40%;
    margin-left: 5px;
  }
  span:nth-of-type(2) {
    font-size: 7pt;
    margin-left: 20px;
  }
  span:last-of-type {
    font-size: 12pt;
    margin-left: 35px;
    font-weight: bold;
    cursor: pointer;
  }
`;
