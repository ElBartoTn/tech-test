import React from "react";
import styled from "styled-components";

class ProductSorting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectValue: "Most popular" };
  }
  handleChange(e) {
    this.setState({ selectValue: e.target.value });
    this.props.onSort(e.target.value);
  }
  render() {
    const Sorting = styled.div`
      float: right;
    `;
    return (
      <Sorting>
        <label>Sort by</label>
        <select
          value={this.state.selectValue}
          onChange={(e) => this.handleChange(e)}
        >
          <option value="most-popular">Most popular</option>
          <option value="lowest-price">Lowest price</option>
          <option value="highest-price">Highest price</option>
          <option value="az-name">Name AZ</option>
          <option value="za-name">Name ZA</option>
        </select>
      </Sorting>
    );
  }
}
export default ProductSorting;
