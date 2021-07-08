import styled from "styled-components";

export const StrongText = styled.span`
  &:after {
    font-weight: 600;
    content: "${(props) => props.text}";
  }
`;
