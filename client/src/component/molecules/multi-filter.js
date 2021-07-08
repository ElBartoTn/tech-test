import React from "react";
import {
  MultiFilterItemBox,
  MultiFilterItemText,
  MultiFilterItemIcon,
} from "../atoms/multi-filter-item";

class MultiFilter extends React.Component {
  deleteFilter(item, filterBy) {
    this.props.removeFunction(item, filterBy);
  }
  render() {
    let items = this.props.items;
    let filterBy = this.props.filterBy;
    return items.map((item) => (
      <MultiFilterItemBox key={item}>
        <MultiFilterItemText>{item}</MultiFilterItemText>
        <MultiFilterItemIcon
          onClick={() => this.deleteFilter(item, filterBy)}
        ></MultiFilterItemIcon>
      </MultiFilterItemBox>
    ));
  }
}
export default MultiFilter;
