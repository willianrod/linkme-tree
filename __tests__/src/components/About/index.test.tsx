import { render, screen } from "@testing-library/react";
import About from "../../../../src/components/About/index";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import themes from "../../../../src/themes";

describe("<About />", () => {
  it("should render all informations", () => {
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <About
          name="Elon Musk"
          occupancy="Hairstylist"
          about="lorem ipsum"
          avatar="/assets/avatar.jpg"
        />
      </ThemeProvider>
    );

    const name = screen.getByText("Elon Musk");
    const occupancy = screen.getByText("Hairstylist");
    const about = screen.getByText("lorem ipsum");
    const avatar = screen.getByRole("img");

    expect(name).toBeInTheDocument();
    expect(occupancy).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });
});
