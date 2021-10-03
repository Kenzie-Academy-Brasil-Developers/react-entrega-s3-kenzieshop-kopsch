import styled from "styled-components";

export const DivMall = styled.div`
  position: relative;
  top: 150px;
  display: flex;
`;

export const DivProduct = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`;

export const DivAside = styled.div`
  width: 20%;
  height: 149.8vh;
  background: #f7f7f7;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
`;

export const CardProduct = styled.div`
  width: 250px;
  height: 350px;
  margin: 20px;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  align-items: center;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const FilterDesc = styled.h2`
  font-size: 24pt;
`;
