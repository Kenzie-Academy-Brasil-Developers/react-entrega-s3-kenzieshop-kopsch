import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const brightness = keyframes` 
0%{filter: invert(0)}
50%{filter: invert(1)}
100%{filter: invert(0)}
`;

export const ContainerCart = styled(motion.div)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 30;
  display: flex;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const Background = styled.div`
  width: 75%;
  height: 100%;
  background: #000000ce;
  @media (max-width: 1400px) {
    width: 60%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const CartContainer = styled.div`
  width: 25%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-flow: column nowrap;
  @media (max-width: 1400px) {
    width: 40%;
  }
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
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
  margin: 10px auto;
  display: flex;
  align-items: center;

  img {
    width: 60px;
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
    margin-left: 50px;
    font-weight: bold;
    cursor: pointer;
  }
  @media (max-width: 375px) {
    width: 95%;
  }
`;

export const TotalValue = styled.div`
  width: 50%;
  height: 35px;
  background: #ececec;
  align-self: flex-end;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const ValueInDollar = styled.span`
  font-weight: bold;
  animation: ${brightness} 1s linear infinite;
`;
