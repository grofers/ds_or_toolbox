import React from "react";
import { render } from "@testing-library/react";
import Page404 from "../Page404";
import { MemoryRouter } from "react-router-dom";

describe("Page404", () => {
  it("should match the snapshot on page load", () => {
    const { asFragment } = render(<Page404 location={{ pathname: "/404" }} />, {
      wrapper: MemoryRouter,
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
