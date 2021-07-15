import React from "react";
import Dropdown from "../molecules/dropDown";
import products from "../../resources/productlist.json";
class ProductFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsWithCount: {},
      header: "",
    };
  }
  /*
    //itemsWithCount {
        Eau de Parfum: 19
        Eau de Toilette: 10
        Parfum: 1
    }
    */
  getItemsWithCount(filterType) {
    //get products based on filter type with count for each choice
    let possibleItems;
    if (filterType === "product-type")
      possibleItems = [...new Set(products.map((item) => item.type))];
    if (filterType === "product-brand")
      possibleItems = [...new Set(products.map((item) => item.brand))];
    let itemsWithCount = {};
    for (let i = 0; i < possibleItems.length; i++) {
      if (filterType === "product-type")
        itemsWithCount[possibleItems[i]] = products.filter(
          (obj) => obj.type === possibleItems[i]
        ).length;
      if (filterType === "product-brand")
        itemsWithCount[possibleItems[i]] = products.filter(
          (obj) => obj.brand === possibleItems[i]
        ).length;
    }
    return itemsWithCount;
  }
  getSelectedFilters() {
    //get selected filters search text and add it to a list
    let selectedFilters;
    const filters = this.props.selectedFilters;
    if (filters) {
      selectedFilters = filters.map((filter) =>
        filter.searchText.map((s) => s)
      );
      selectedFilters = [].concat.apply([], selectedFilters);
      return selectedFilters;
    }
  }
  isAnyFilterSelected() {
    const filters = this.props.selectedFilters;
    const filterBy = this.props.filterBy;
    if (filters) {
      let selectedFiltersByType;
      switch (filterBy) {
        case "product-type":
          selectedFiltersByType = this.getSelectedfiltersByType(
            "product-type",
            filters
          );
          break;
        case "product-brand":
          selectedFiltersByType = this.getSelectedfiltersByType(
            "product-brand",
            filters
          );
          break;
        default:
          return false;
      }
      return selectedFiltersByType.length > 0;
    }
  }
  getSelectedfiltersByType(filtertype, filters) {
    let selectedFiltersByType = filters.map((filter) =>
      filter.filterBy === filtertype ? filter.searchText : []
    );
    selectedFiltersByType = [].concat.apply([], selectedFiltersByType);
    return selectedFiltersByType;
  }
  submit() {
    this.props.submit();
  }

  componentDidMount() {
    let itemsWithCount;
    let header;
    if (this.props.filterBy === "product-type") {
      itemsWithCount = this.getItemsWithCount("product-type");
      header = "Type";
    }
    if (this.props.filterBy === "product-brand") {
      itemsWithCount = this.getItemsWithCount("product-brand");
      header = "Brand";
    }
    this.setState({ itemsWithCount: itemsWithCount, header: header });
  }

  render() {
    let selectedFilters = this.getSelectedFilters();
    return (
      <Dropdown
        header={this.state.header}
        items={this.state.itemsWithCount}
        multiSelect={true} //in case we need a dropdown without multi select checkboxes
        onSelectItem={this.props.onFilter}
        buttonText={this.isAnyFilterSelected() ? "Submit" : "Close"} //change button text if no/any filter selected
        selectedItems={selectedFilters}
        buttonAction={this.isAnyFilterSelected() ? "Submit" : "Close"}
        submit={() => this.submit()}
        isOpen={this.props.isOpen}
        onClick={() => this.props.onClick()}
        onClose={() => this.props.onClose()}
      ></Dropdown>
    );
  }
}
export default ProductFilter;
