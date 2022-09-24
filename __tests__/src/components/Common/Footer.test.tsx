import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import themes from "../../../../src/themes";
import Footer from "../../../../src/components/Common/Footer";

describe("<Footer />", () => {
  it("should render credits", () => {
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <Footer />
      </ThemeProvider>
    );

    const footerText = screen.getByText(/Powered by LinkMeTree/);

    expect(footerText).toBeInTheDocument();
  });
});
