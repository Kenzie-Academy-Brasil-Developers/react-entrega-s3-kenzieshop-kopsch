import styled from "styled-components";

export const ImageCard = styled.img`
  width: 240px;
  filter: brightness(95%);
`;

export const DivHover = styled.span`
  display: ${(e) => (e.isVisible ? "block" : "none")};
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  left: 0;
  right: 0;
  top: 210px;
  background-color: #000000d3;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

export const SpanTitle = styled.span`
  font-size: 12pt;
  width: 90%;
  margin: 8px 0;
  font-weight: 300;
`;

export const SpanPrice = styled.span`
  font-size: 10pt;
  margin-bottom: 8px;
`;
