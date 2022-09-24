import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import themes from "../../../../src/themes";
import Link from "../../../../src/components/Links/Link";

describe("<Link />", () => {
  it("should render text and link should have an href", () => {
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <Link color="#FFFFFF" id={1} title="Social Link" url="https://twitter.com/" />
      </ThemeProvider>
    );

    const linkButton = screen.getByRole("link") as HTMLAnchorElement;

    expect(linkButton.href).toBe('https://twitter.com/');
    expect(linkButton.innerHTML).toBe("Social Link");
    expect(linkButton).toHaveStyle('border-color: #FFFFFF');
  });

  it("should render accent color if color is not specified", () => {
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <Link id={1} title="Social Link" url="https://twitter.com/" />
      </ThemeProvider>
    );

    const linkButton = screen.getByRole("link") as HTMLAnchorElement;

    expect(linkButton.href).toBe('https://twitter.com/');
    expect(linkButton.innerHTML).toBe("Social Link");
    expect(linkButton).toHaveStyle('border-color: #64FFDA');
  });
});
