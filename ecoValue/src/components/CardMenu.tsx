import React from "react";
import Card from "./Card";

export type CardItem = {
  title: string;
  result: string;
  subtitle?: string;
  icon: React.ReactNode;
  warning: "low" | "medium" | "high";
};

type CardMenuProps = {
  cards: CardItem[];
};

const CardMenu: React.FC<CardMenuProps> = ({ cards }) => {
  return (
    <div className="w-full box-border py-8 px-4 md:px-8 lg:px-0
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                    gap-y-8 gap-x-6">
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
