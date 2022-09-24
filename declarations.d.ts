declare module "*.css";

interface Home {
  theme: string;
}

interface ITheme {
  colors: {
    accent: string;
    primary: string;
    card: {
      background: string;
      border: string;
    };
    text: {
      accent: string;
      primary: string;
      secondary: string;
    };
  };
  common: {
    borderRadius: string;
    gap: string;
    borderSize: string;
    width: string;
  };
  typography: {
    titleFontSize: string;
    subtitleFontSize: string;
    subtitleLineHeight: string;
    textFontSize: string;
    textLineHeight: string;
    sectionTitleFontSize: string;
    sectionTitleLineHeight: string;
  };
}

interface IThemes {
  [key: string]: ITheme;
}

interface IData {
  meta: {
    title: string;
    description: string;
    tags: string;
    author: string;
  };
  theme: string;
  name: string;
  occupancy: string;
  about: string;
  avatar: string;
  links?: ILink[];
  cards?: ICard[];
}

interface ICard {
  id: number;
  title: string;
  items: ICardItem[];
}

interface ICardItem {
  id: number;
  title: string;
  url: string;
  banner?: string;
  description: string;
}

interface ILink {
  id: number;
  title: string;
  items: ILinkItem[];
}

interface ILinkItem {
  id: number;
  title: string;
  url: string;
  color?: string;
}

type IAbout = pick<IData, "name" | "occupancy" | "about" | "avatar">;
