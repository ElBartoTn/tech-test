import React from "react";
import { Col2 } from "../atoms/grid";
import { StrongText } from "../atoms/strong-text";
import {
  MultiFilterItemBox,
  MultiFilterItemText,
  MultiFilterItemIcon,
} from "../atoms/multi-filter-item";

class ResetFilters extends React.Component {
  render() {
    return (
      <div>
        <Col2>
          <StrongText text="Your filters :"></StrongText>
          <MultiFilterItemBox>
            <MultiFilterItemText>Reset all filters</MultiFilterItemText>
            <MultiFilterItemIcon
              onClick={(event) => this.props.resetFunction(event)}
            ></MultiFilterItemIcon>
          </MultiFilterItemBox>
        </Col2>
      </div>
    );
  }
}
export default ResetFilters;
