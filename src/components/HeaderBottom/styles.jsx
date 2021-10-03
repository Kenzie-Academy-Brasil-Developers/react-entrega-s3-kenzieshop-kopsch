import styled from "styled-components";

export const BottomContainer = styled.div`
  height: 100px;
  background: #f7f7f7;
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  flex-flow: row;
`;

export const BottomLink = styled.div`
  height: 98px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #000;
  }
`;

export const DivLeft = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DivCenter = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 33%;
`;

export const DivRight = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const InputStyled = styled.input`
  border: none;
  outline: none;
  height: 90%;
  text-align: center;
`;

export const DivSearch = styled.div`
  border: 1px solid #8c8c8c;
  background: #fff;
  border-radius: 7px;
  width: 220px;
  height: 40%;
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ImageSearch = styled.img`
  width: 20px;
`;

export const ImageLogo = styled.img`
  width: 130px;
  margin-left: 20px;
  cursor: pointer;
`;
