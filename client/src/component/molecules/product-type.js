import React from "react";
import styled from "styled-components";

class ProductType extends React.Component {
  render() {
    const TypeText = styled.span`
      color: #737373;
      margin-bottom: 7px;
      font-size: 1rem;
      overflow: hidden;
    `;
    return (
      <div>
        <TypeText>{this.props.text}</TypeText>
      </div>
    );
  }
}
export default ProductType;
