import styled from "styled-components";

export const TopContainer = styled.div`
  height: 50px;
  width: 100%;
  background: #f7f7f7;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const TopLinks = styled.div`
  height: 95%;
  width: 9%;
  font-size: 10pt;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: #898989;
  &:hover {
    border-bottom: 2px solid #000000;
    color: #000000;
  }

  @media (max-width: 900px) {
    &:nth-child(1) {
      display: none;
    }
    &:nth-child(2) {
      display: none;
    }
  }
`;

export const ImageCart = styled.img`
  width: 25px;
`;

export const CartItems = styled.span`
  font-size: 8pt;
  position: absolute;
  background: #4f55ff;
  color: #ffff;
  padding: 0 5px;
  font-weight: bold;
  border-radius: 100%;
  top: 5px;
  right: 50px;
  @media (max-width: 900px) {
    right: 10px;
  }
`;
