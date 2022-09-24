import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import themes from "../../../../src/themes";
import CardItem from "../../../../src/components/Cards/CardItem";

describe("<CardItem />", () => {
  it("should render all informations", () => {
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <CardItem
          description="Description 1"
          id={1}
          title="Item Title 1"
          url="https://google.com/"
          banner="/assets/spacex.jpg"
        />
      </ThemeProvider>
    );

    const description = screen.getByText(/Description 1/);
    const itemTitle = screen.getByText(/Item Title 1/);
    const link = screen.getByRole("link") as HTMLAnchorElement;

    expect(description).toBeInTheDocument();
    expect(itemTitle).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link.href).toBe("https://google.com/");
  });
});
