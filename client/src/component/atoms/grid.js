import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Col2 = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
`;
