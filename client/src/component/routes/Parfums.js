import React from "react";
import Products from "../pages/products-list";
import ProductFilters from "../pages/product-filters";
import ProductSorting from "../molecules/product-sort";
import { gql } from "apollo-boost";
import { client } from "../../index";



class Parfums extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filters: [] };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData(){
   return client
    .query({
      query: gql`
        query GetProducts {
            products {
                id
                name
                slug
                brand
                type
                image
                price
                size
                rating
          }
        }
      `,
    })
    .then(result => this.setState({ products: result.data.products }));
}
   filterProducts(selectedFilters) {
    if (selectedFilters) {
     this.fetchData().then(() => {
        let filterResult;
        let selectedTypeFilters;
        let selectedBrandFilters;
        let typeFilterCount;
        let brandFilterCount;
  
        if (selectedFilters.some((f) => f.filterBy === "product-type")) {//Count selected filter by product type
          selectedTypeFilters = selectedFilters.filter(
            (f) => f.filterBy === "product-type"
          )[0].searchText;
          typeFilterCount = selectedTypeFilters.length;
        }
        if (selectedFilters.some((f) => f.filterBy === "product-brand")) {//Count selected filter by product brand
          selectedBrandFilters = selectedFilters.filter(
            (f) => f.filterBy === "product-brand"
          )[0].searchText;
          brandFilterCount = selectedBrandFilters.length;
        }
  
        if (!selectedTypeFilters) typeFilterCount = 0;
        if (!selectedBrandFilters) brandFilterCount = 0;
  
        if (typeFilterCount === 0 && brandFilterCount === 0)//if no filter keep the current products
          filterResult = this.state.products;
        if (typeFilterCount > 0 && brandFilterCount === 0)//filter by type only
          filterResult = this.state.products.filter(
            (p) => selectedTypeFilters.indexOf(p.type) > -1
          );
        if (typeFilterCount === 0 && brandFilterCount > 0)//filter by brand only
          filterResult = this.state.products.filter(
            (p) => selectedBrandFilters.indexOf(p.brand) > -1
          );
        if (typeFilterCount > 0 && brandFilterCount > 0) {//filter by brand and type
          let productsBytype = this.state.products.filter(
            (p) => selectedTypeFilters.indexOf(p.type) > -1
          );
          filterResult = productsBytype.filter(
            (p) => selectedBrandFilters.indexOf(p.brand) > -1
          );
        }
        if (filterResult) {
          this.setState({ products: filterResult });
        }
     });
     
    }
  }
  sortProducts(sortBy) {
    let sortedProducts;
    const products = this.state.products;
    switch (sortBy) {
      case "most-popular":
        sortedProducts = products.sort((a, b) => b.rating - a.rating);
        break;
      case "lowest-price":
        sortedProducts = products.sort(
          (a, b) => parseInt(a.price) - parseInt(b.price)
        );
        break;
      case "highest-price":
        sortedProducts = products.sort(
          (a, b) => parseInt(b.price) - parseInt(a.price)
        );
        break;
      case "az-name":
        sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za-name":
        sortedProducts = products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    this.setState({ products: sortedProducts });
  }
  render() {
    return (
      <div>
        <ProductFilters
          filterAction={(selectedfilters) =>
            this.filterProducts(selectedfilters)
          }
        ></ProductFilters>
        <ProductSorting
          onSort={(sortBy) => this.sortProducts(sortBy)}
        ></ProductSorting>
       <Products products={this.state.products}></Products>
      </div>
    );
  }
}
export default Parfums;

