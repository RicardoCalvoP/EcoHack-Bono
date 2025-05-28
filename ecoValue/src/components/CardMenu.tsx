import React from "react";
import Card from "./Card";

type CardItem = {
  title: string;
  result: string;
  subtitle: string;
  icon: React.ReactNode;
  warning: string;
};

type CardMenuProps = {
  cards: CardItem[];
};

const CardMenu: React.FC<CardMenuProps> = ({ cards }) => {
  return (
    <div className="CardMenu">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          result={card.result}
          subtitle={card.subtitle}
          icon={card.icon}
          warning={card.warning}
        />
      ))}
    </div>
  );

};

export default CardMenu;
