// src/data/cardData.ts
import { Calculator, TrendingDown, Leaf, Factory } from "lucide-react";
import React from "react";

export type CardItem = {
  title: string;
  result: string;
  subtitle: string;
  icon: React.ReactNode;
  warning: string;
};


export const cardData: CardItem[] = [
  {
    title: "Total CO2",
    result: "81750.99",
    subtitle: "kg CO2/mes",
    icon: <Calculator size={48} />,
    warning: "high",
  },
  {
    title: "Categoría Mayor",
    result: "Residuos",
    subtitle: "",
    icon: <TrendingDown size={48} />,
    warning: "medium",
  },
  {
    title: "Árboles Equivalentes",
    result: "3716",
    subtitle: "para compensar",
    icon: <Leaf size={48} />,
    warning: "low",
  },
  {
    title: "Nivel de Impacto",
    result: "Alto",
    subtitle: "",
    icon: <Factory size={48} />,
    warning: "high",
  },
];
