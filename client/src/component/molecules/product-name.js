import React from "react";
import { StrongText } from "../atoms/strong-text";
class ProductName extends React.Component {
  getName(product) {
    return product.name.replace(product.brand, "").replace(product.type, "");
  }
  render() {
    const product = this.props.product;
    return (
      <div>
        <StrongText text={this.getName(product)} id="name"></StrongText>
      </div>
    );
  }
}
export default ProductName;
