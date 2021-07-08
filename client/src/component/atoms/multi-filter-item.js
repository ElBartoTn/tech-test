import styled from "styled-components";
import icon from "../../resources/ico.png";
export const MultiFilterItemBox = styled.span`
  display: inline-block;
  cursor: pointer;
  margin-left: 5px;
  text-align: right;
`;
export const MultiFilterItemText = styled.span`
  margin-bottom: 0;
  font-size: small;
  line-height: 2em;
`;
export const MultiFilterItemIcon = styled.span`
  background-image: url(${icon});
  background-position: -184px -150px;
  background-repeat: no-repeat;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 5px;
`;
