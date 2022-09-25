import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import fs from "fs";

import Home, { getStaticProps } from "../../../src/pages";
import themes from "../../../src/themes";

describe("<Home />", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  it("should render page from local file", async () => {
    process.env.GIST_URL = undefined;
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

  it("should render page from gist", async () => {
    process.env.GIST_URL =
      "https://gist.githubusercontent.com/willianrod/f9af9032d4c5d0087d92dea26a755af8/raw/4949aaac5d0a367e3076dc6dd56b3c2f7b4c11bc/linkme-tree.yml";
    global.fetch = jest.fn(() => {
      const payload = fs.readFileSync("src/data/index.yml", "utf8");

      return Promise.resolve({
        blob: () =>
          Promise.resolve({
            text: () => Promise.resolve(payload),
          }),
      });
    }) as any;

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
    expect(global.fetch).toBeCalledWith(process.env.GIST_URL);
  });

  it("should fallback to local file", async () => {
    process.env.GIST_URL =
      "https://gist.githubusercontent.com/willianrod/f9af9032d4c5d0087d92dea26a755af8/raw/4949aaac5d0a367e3076dc6dd56b3c2f7b4c11bc/linkme-tree.yml";
    global.fetch = jest.fn().mockRejectedValue(new Error('Error')) as any;

    const { props } = await getStaticProps();
    render(
      <ThemeProvider theme={themes["default-dark"]}>
        <Home {...props} />
      </ThemeProvider>
    );

    expect(global.fetch).toBeCalledWith(process.env.GIST_URL);
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
