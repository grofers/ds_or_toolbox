import React from "react";
import { render } from "@testing-library/react";
import SamplePageForm from "../SamplePageForm";

describe("SamplePageForm", () => {
  it("should match the snapshot on page load", () => {
    const { asFragment } = render(<SamplePageForm />);

    expect(asFragment()).toMatchSnapshot();
  });
});
