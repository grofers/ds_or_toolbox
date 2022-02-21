import React from "react";
import { render } from "@testing-library/react";
import SamplePage from "../SamplePage";

describe("Sample Page", () => {
  it("should match the snapshot on page load", () => {
    const { asFragment } = render(<SamplePage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
