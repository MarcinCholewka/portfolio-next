import React from "react";
import { render } from "@testing-library/react";
import { About } from "@/components/About/About";
import { NextIntlProvider } from "next-intl";
import "@testing-library/jest-dom";

describe("<About />", () => {
  it("renders without crashing", () => {
    const { container, getByText } = render(
      <NextIntlProvider
        locale="en"
        messages={{
          About: {
            heading: "Test Heading",
            mainInfo: "Test Main Info",
            hobby: "Test Hobby",
          },
        }}
      >
        <About />
      </NextIntlProvider>
    );

    expect(container).toMatchSnapshot();
    expect(getByText("Test Heading")).toBeInTheDocument();
    expect(getByText("Test Main Info")).toBeInTheDocument();
    expect(getByText("Test Hobby")).toBeInTheDocument();
  });
});
