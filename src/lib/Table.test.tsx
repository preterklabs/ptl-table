import React from "react";
import renderer from "react-test-renderer";
import Table from ".";

describe("Table", () => {
  it("renders properly", () => {
    const tree = renderer.create(<Table data={[]} columns={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
