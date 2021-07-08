import styled from "styled-components";

const StyledFilterButton = styled.button`
  font-weight: 400;
  font-size: 14px;
  padding: 0;
  margin: 0;
  display: block;
  text-align: center;
  cursor: pointer;
  height: 2.57143rem;
  line-height: 2.57143rem;
  letter-spacing: 0.07143rem;
  text-transform: none;
  background-color: #292929;
  border-color: #292929;
  color: #fff;
  width: 163px;
  margin: 0 5px;
`;
const FilterButton = ({ text, action }) => (
  <StyledFilterButton onClick={action}>{text}</StyledFilterButton>
);
export default FilterButton;
