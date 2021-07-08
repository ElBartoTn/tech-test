import React from "react";
import styled from "styled-components";

class ProductBasePrice extends React.Component {
  getBasePrice() {
    let size = parseFloat(this.props.size);
    let price = this.props.price;
    let baseSize = this.props.baseSize;
    let convertedPrice = price / 100;
    convertedPrice = convertedPrice.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    });
    let basePrice = (baseSize / size) * parseFloat(convertedPrice);
    return Math.round(basePrice * 100) / 100 + "€ / " + baseSize + "ML";
  }
  render() {
    const BasePrice = styled.span`
      font-size: 0.64286rem;
      color: #000;
    `;
    return (
      <div>
        <BasePrice>{this.getBasePrice()}</BasePrice>
      </div>
    );
  }
}
export default ProductBasePrice;
