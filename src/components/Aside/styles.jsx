import styled from "styled-components";

export const CategoryBar = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  background: #f7f7f7;
  cursor: pointer;
  padding: 5px;
  margin-bottom: 3px;
  &:hover {
    filter: brightness(90%);
  }
`;

export const Category = styled.span`
  font-size: 15pt;
  padding: 14px 0;
  font-weight: 600;
`;

export const PlusSignal = styled.span`
  font-size: 28pt;
`;
