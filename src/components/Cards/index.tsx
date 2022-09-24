import { Fragment } from "react";
import SectionTitle from "../Common/SectionTitle";
import CardItem from "./CardItem";

const Cards: React.FC<{ cards: ICard[] }> = ({ cards }) => {
  return (
    <>
      {cards.map((card) => {
        if (!card.items.length) return <Fragment key={card.id} />;
        return (
          <Fragment key={card.id}>
            <SectionTitle>{card.title}</SectionTitle>
            {card.items.map((cardItem) => (
              <CardItem key={cardItem.id} {...cardItem} />
            ))}
          </Fragment>
        );
      })}
    </>
  );
};

export default Cards;
