import React from "react";

const Checkbox = (props) => (
  <input
    type="checkbox"
    checked={props.checked}
    onChange={(event) => props.onChange(event)}
    value={props.value}
  />
);

export default Checkbox;
