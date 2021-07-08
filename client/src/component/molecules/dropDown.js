import React from "react";
import { DropDownContainer } from "../atoms/dropdown/dropDown-container";
import { DropDownHeader } from "../atoms/dropdown/dropDownHeader";
import { DropDownListContainer } from "../atoms/dropdown/dropDown-list-container";
import { DropDownListItem } from "../atoms/dropdown/dropDown-list-item";
import { DropDownList } from "../atoms/dropdown/dropDown-list";
import {
  DropDownIconDown,
  DropDownIconUp,
} from "../atoms/dropdown/dropDown-icon";
import { ItemsCount } from "../atoms/items-count";
import { DropdownItemLabel } from "../atoms/dropdown/dropdown-item-label";
import Checkbox from "./checkbox";
import FilterButton from "../atoms/filter-button";
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  isItemChecked(item) {
    let selectedFilters = this.props.selectedItems;
    if (selectedFilters) return selectedFilters.includes(item);
  }
  toggleDropdown() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  submit() {
    this.props.submit();
  }
  render() {
    let items = this.props.items;
    return (
      <DropDownContainer>
        <DropDownHeader onClick={() => this.toggleDropdown()}>
          {this.props.header}
          {!this.state.isOpen ? (
            <DropDownIconDown></DropDownIconDown>
          ) : (
            <DropDownIconUp></DropDownIconUp>
          )}
        </DropDownHeader>
        {this.state.isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {Object.keys(items).map((item) => (
                <DropDownListItem
                  id={"filter-" + item.split(" ").join("-").toLowerCase()}
                  key={item}
                >
                  <DropdownItemLabel>
                    {this.props.multiSelect && (
                      <Checkbox
                        checked={this.isItemChecked(item)}
                        onChange={(event) => this.props.onSelectItem(event)}
                        value={item}
                      />
                    )}
                    {item}
                  </DropdownItemLabel>
                  <ItemsCount>({items[item]})</ItemsCount>
                </DropDownListItem>
              ))}
            </DropDownList>
            {
              <FilterButton
                text={this.props.buttonText}
                action={
                  this.props.buttonAction === "Close"
                    ? () => this.toggleDropdown()
                    : () => this.submit()
                }
              ></FilterButton>
            }
          </DropDownListContainer>
        )}
      </DropDownContainer>
    );
  }
}
export default Dropdown;
