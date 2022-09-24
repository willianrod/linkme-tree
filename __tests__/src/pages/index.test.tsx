import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import Home, { getStaticProps } from "../../../src/pages";
import themes from "../../../src/themes";

describe("<Home />", () => {
  it("should render page", async () => {
    const { props } = await getStaticProps();
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <Home {...props} />
      </ThemeProvider>
    );
    const linksTitleText = props.links?.length ? props.links[0].title : "";
    const cardsTitleText = props.cards?.length ? props.cards[0].title : "";

    const linksTitle = screen.queryAllByText(linksTitleText);
    const cardsTitle = screen.queryAllByText(cardsTitleText);

    const footerText = screen.getByText(/Powered by LinkMeTree/);

    expect(footerText).toBeInTheDocument();
    expect(linksTitle[0]).toBeInTheDocument();
    expect(cardsTitle[0]).toBeInTheDocument();
  });

  it("should not render links if empty", async () => {
    const { props } = await getStaticProps();
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <Home {...{ ...props, links: undefined }} />
      </ThemeProvider>
    );

    const linksTitleText = props.links?.length ? props.links[0].title : "";
    const cardsTitleText = props.cards?.length ? props.cards[0].title : "";

    const linksTitle = screen.queryAllByText(linksTitleText);
    const cardsTitle = screen.queryAllByText(cardsTitleText);

    expect(linksTitle.length).toBe(0);
    expect(cardsTitle.length).toBe(1);
  });

  it("should not render cards if empty", async () => {
    const { props } = await getStaticProps();
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <Home {...{ ...props, cards: undefined }} />
      </ThemeProvider>
    );

    const linksTitleText = props.links?.length ? props.links[0].title : "";
    const cardsTitleText = props.cards?.length ? props.cards[0].title : "";

    const linksTitle = screen.queryAllByText(linksTitleText);
    const cardsTitle = screen.queryAllByText(cardsTitleText);

    expect(cardsTitle.length).toBe(0);
    expect(linksTitle.length).toBe(1);
  });

  it("should render about section", async () => {
    const { props } = await getStaticProps();
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <Home {...props} />
      </ThemeProvider>
    );

    const name = screen.getByText(props.name);
    const occupancy = screen.getByText(props.occupancy);
    const about = screen.getByText(props.about);
    const [avatar] = screen.queryAllByRole("img");

    expect(name).toBeInTheDocument();
    expect(occupancy).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });
});
