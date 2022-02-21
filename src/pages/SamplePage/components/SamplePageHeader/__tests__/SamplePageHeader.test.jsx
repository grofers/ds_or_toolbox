import React from "react";
import { render } from "@testing-library/react";
import SamplePageHeader from "../SamplePageHeader";

describe("SamplePageHeader", () => {
  it("should match the snapshot on page load", () => {
    const { asFragment } = render(<SamplePageHeader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
