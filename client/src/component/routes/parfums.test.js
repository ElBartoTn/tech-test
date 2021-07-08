import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Parfums from "./Parfums";
import productsData from "../../resources/productlist.json";
configure({ adapter: new Adapter() });

describe("Parfums page component", () => {
  it("should render parfums page component", () => {
    const component = shallow(<Parfums />);
    const products = component.find("products");
    expect(component.state("products")).toBeDefined();
    expect(component.state("products")).toEqual(productsData);

    const filters = component.find("filters");
    expect(component.state("filters")).toBeDefined();
  });
});
