import React from "react";
import { Grid } from "../atoms/grid";
import { StrongText } from "../atoms/strong-text";
import MultiFilter from "../molecules/multi-filter";
import ProductFilter from "../organisms/product-filter";
import ResetFilters from "../organisms/reset-filters";

class ProductFilters extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
    };
  }
  /*
    filters list example :
     {
     filterBy: "product-type"
     searchText: Array(2)
         0: "Eau de Parfum"
         1: "Eau de Toilette"
     filterBy: "product-brand"
     searchText: Array(2)
         0: "Lancôme"
         1: "Paco Rabanne"
 }
    */
  onFilter(event, filterBy) {
    if (event) {
      let filters = this.state.filters;
      let isChecked = event.target.checked;
      let checked_filter = event.target.value;
      if (isChecked) {
        //if filter item checked, update filters state with object {filterBy: string, searchText: string[]}
        let doFilterAlreadyExist =
          filters.filter((filter) => filter.filterBy === filterBy).length > 0;
        if (doFilterAlreadyExist) {
          let filterIndex = filters.findIndex(
            (filter) => filter.filterBy === filterBy
          ); //if a filter type exists, add the search term to searchText[]
          filters[filterIndex].searchText.push(checked_filter);
        } else {
          //if the filter does not exists, add a new object
          let filter = {
            filterBy: filterBy,
            searchText: [checked_filter],
          };
          filters.push(filter);
        }
      } else {
        //if not checked, delete the filter from the list
        let filterIndex = filters.findIndex(
          (filter) => filter.filterBy === filterBy
        );
        if (filterIndex > -1) {
          //find the filter and remove it from searchText[]
          let searchTextIndex = filters[filterIndex].searchText.findIndex(
            (s) => s === checked_filter
          );
          if (searchTextIndex > -1) {
            filters[filterIndex].searchText = filters[
              filterIndex
            ].searchText.filter((t) => t !== checked_filter);
          }
          for (let i = 0; i < filters.length; i++) {
            //if searchText[] of a certain type is empty, remove the filter object
            if (filters[i].searchText.length === 0) {
              filters = filters.filter((f) => f.searchText.length > 0);
            }
          }
        }
      }
      this.setState({ filters: filters }); //update the filters list
    }
  }
  removeFilter(filterName, filterBy) {
    //To remove a filter from the multi-filter component
    let filters = this.state.filters;
    let filterIndex = filters.findIndex(
      (filter) => filter.filterBy === filterBy
    );
    if (filterIndex > -1) {
      let searchTextIndex = filters[filterIndex].searchText.findIndex(
        (s) => s === filterName
      );
      if (searchTextIndex > -1) {
        filters[filterIndex].searchText = filters[
          filterIndex
        ].searchText.filter((t) => t !== filterName);
      }
    }
    this.setState({ filters: filters });
    this.props.filterAction(this.state.filters); //recall filter action to update the products list
  }
  shouldHideResetFilter() {
    //hide reset filter component when no filter selected
    let filters = this.state.filters;
    return (
      filters.length === 0 ||
      filters.filter((f) => f.searchText.length === 0).length === filters.length
    );
  }
  resetFilter(event) {
    //remove all filters and update list
    this.setState({ filters: [] });
    this.props.filterAction([]);
  }
  render() {
    //To add a new filter use the ProductFilter component with required props
    return (
      <div>
        <Grid>
          <ProductFilter
            filterBy="product-type"
            onFilter={(event) => this.onFilter(event, "product-type")}
            selectedFilters={this.state.filters}
            submit={() => this.props.filterAction(this.state.filters)}
          ></ProductFilter>
          <ProductFilter
            filterBy="product-brand"
            onFilter={(event) => this.onFilter(event, "product-brand")}
            selectedFilters={this.state.filters}
            submit={() => this.props.filterAction(this.state.filters)}
          ></ProductFilter>
        </Grid>
        {!this.shouldHideResetFilter() && (
          <ResetFilters
            resetFunction={(event) => this.resetFilter(event)}
          ></ResetFilters>
        )}
        <Grid>
          {this.state.filters.map(
            (
              filter //render multi-filter with selected filters from dropdown
            ) =>
              filter.searchText.length > 0 && (
                <div key={filter.filterBy}>
                  <StrongText
                    text={filter.filterBy === "product-type" ? "Type" : "Brand"}
                  ></StrongText>
                  <MultiFilter
                    items={filter.searchText}
                    filterBy={filter.filterBy}
                    removeFunction={(filterName, filterBy) =>
                      this.removeFilter(filterName, filterBy)
                    }
                  ></MultiFilter>
                </div>
              )
          )}
        </Grid>
      </div>
    );
  }
}

export default ProductFilters;