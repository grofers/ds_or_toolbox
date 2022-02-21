import React from "react";
import { render } from "@testing-library/react";
import SamplePageTable from "../SamplePageTable";

describe("SamplePageTable", () => {
  it("should match the snapshot on page load", () => {
    const { asFragment } = render(<SamplePageTable />);

    expect(asFragment()).toMatchSnapshot();
  });
});
