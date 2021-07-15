import React from "react";
import styled from "styled-components";
import { Grid } from "../atoms/grid";
import ProductCard from "../organisms/product-card";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  render() {
    const products = this.props.products;
    const List = styled.li`
      position: relative;
      text-align: center;
      font-size: 0.85714rem;
      margin-bottom: 1.78571rem;
      padding: 0;
      display: inline-block;
    `;
    return (
      <ul>
        <Grid>
          {products.map((product) => (
            <List key={product.id}>
              <ProductCard product={product}></ProductCard>
            </List>
          ))}
        </Grid>
      </ul>
    );
  }
}
export default Products;
