import React from "react";
import { ProductBox } from "../atoms/product-box";
import { StrongText } from "../atoms/strong-text";
import ProductName from "../molecules/product-name";
import ProductType from "../molecules/product-type";
import ProductPrice from "../molecules/product-price";
import ProductBasePrice from "../molecules/product-base-price";
import { Image } from "../atoms/image";
import ProductRating from "../molecules/product-rating";

class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <div>
        <ProductBox>
          <a href={product.slug}>
            <Image src={product.image} title={product.name}></Image>
          </a>
          <br></br>
          <StrongText text={product.brand}></StrongText>
          <ProductName product={product}></ProductName>
          <ProductType text={product.type}></ProductType>
          <ProductPrice
            size={product.size}
            price={product.price}
          ></ProductPrice>
          <ProductBasePrice
            size={product.size}
            price={product.price}
            baseSize="100"
          ></ProductBasePrice>
          <ProductRating
            rating={product.rating}
            baseRate="100"
            starsCount="5"
          ></ProductRating>
        </ProductBox>
      </div>
    );
  }
}
export default ProductCard;
