import React from "react";
import styled from "styled-components";

class ProductPrice extends React.Component {
  getPrice() {
    const size = this.props.size;
    let price = this.props.price;
    let convertedPrice = price / 100;
    convertedPrice = convertedPrice.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    });
    return convertedPrice + " / " + size;
  }
  render() {
    const Price = styled.span`
      font-size: 1rem;
      line-height: 1.2;
    `;
    return (
      <div>
        <Price>{this.getPrice()}</Price>
      </div>
    );
  }
}
export default ProductPrice;
