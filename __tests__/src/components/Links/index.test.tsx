import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import themes from "../../../../src/themes";
import Links from "../../../../src/components/Links";

describe("<Link />", () => {
  it("should render text and link should have an href", () => {
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <Links
          links={[
            {
              id: 1,
              items: [
                {
                  color: "#FFFFFF",
                  id: 1,
                  title: "Link Item 1",
                  url: "https://twitter.com/",
                },
                {
                  color: "#00FFFF",
                  id: 2,
                  title: "Link Item 2",
                  url: "https://google.com/",
                },
              ],
              title: "Link group",
            },
          ]}
        />
      </ThemeProvider>
    );

    const links = screen.getAllByRole("link") as HTMLAnchorElement[];
    const groupTitle = screen.getByText(/Link group/);

    expect(groupTitle).toBeInTheDocument();

    expect(links[0].href).toBe("https://twitter.com/");
    expect(links[0].innerHTML).toBe("Link Item 1");

    expect(links[1].href).toBe("https://google.com/");
    expect(links[1].innerHTML).toBe("Link Item 2");
  });
});
