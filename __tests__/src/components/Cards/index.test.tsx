import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import themes from "../../../../src/themes";
import Cards from "../../../../src/components/Cards";

describe("<Cards />", () => {
  it("should render all information", () => {
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <Cards
          cards={[
            {
              id: 1,
              items: [
                {
                  description: "Description 1",
                  id: 1,
                  title: "Item Title",
                  url: "https://google.com/",
                  banner: "/assets/spacex.jpg",
                },
                {
                  description: "Description 2",
                  id: 2,
                  title: "Item Title",
                  url: "https://youtube.com/",
                  banner: "/assets/spacex.jpg",
                },
              ],
              title: "Card title 1",
            },
          ]}
        />
      </ThemeProvider>
    );

    const cardTitle = screen.getByText("Card title 1");
    const description = screen.getByText("Description 1");
    const itemTitle = screen.getAllByText(/Item Title/);
    const links = screen.getAllByRole("link") as HTMLAnchorElement[];

    expect(cardTitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(itemTitle.length).toBe(2);
    expect(links[0].href).toBe("https://google.com/");
    expect(links[1].href).toBe("https://youtube.com/");
  });

  it("should not render if items is empty", () => {
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <Cards
          cards={[
            {
              id: 1,
              items: [],
              title: "Card title",
            },
          ]}
        />
      </ThemeProvider>
    );

    const cardsTitle = screen.queryAllByText(/Card title/);

    expect(cardsTitle.length).toBe(0);
  });
});
