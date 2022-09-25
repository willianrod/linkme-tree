import type { NextPage } from "next";
import Head from "next/head";
import yaml from "js-yaml";
import fs from "fs";
import About from "../components/About";
import Links from "../components/Links";
import Cards from "../components/Cards";
import Container from "../components/Common/Container";
import Content from "../components/Common/Content";
import Footer from "../components/Common/Footer";

const Home: NextPage<IData> = ({
  name,
  avatar,
  about,
  occupancy,
  links,
  cards,
  meta,
}) => {
  return (
    <Container>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.tags} />
        <meta name="author" content={meta.author} />
      </Head>

      <Content>
        <About
          avatar={avatar}
          name={name}
          about={about}
          occupancy={occupancy}
        />
        <Links links={links || []} />
        <Cards cards={cards || []} />
      </Content>

      <Footer />
    </Container>
  );
};

export async function getStaticProps() {
  const gistUrl = process.env.GIST_URL as string;

  if (gistUrl) {
    const gistData = await fetch(gistUrl)
      .then((res) => res.blob())
      .then((blob) => blob.text())
      .then((yamlAsString) => yaml.load(yamlAsString) as IData)
      .catch((err) => {
        console.log("yaml err:", err);
      });

    if (gistData) {
      return {
        props: {
          ...gistData,
        },
      };
    }
  }

  const data = yaml.load(
    fs.readFileSync("src/data/index.yml", "utf8")
  ) as IData;

  return {
    props: {
      ...data,
    },
  };
}

export default Home;
