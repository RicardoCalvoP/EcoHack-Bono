import React from "react";

type CardProps = {
  title: string;
  result: string;
  subtitle?: string;
  icon: React.ReactNode;
  warning: "low" | "medium" | "high";
};

const warningColors: Record<CardProps["warning"], string> = {
  low: 'text-green-600 dark:text-green-400',
  medium: 'text-yellow-600 dark:text-yellow-400',
  high: 'text-red-600 dark:text-red-400',
};

const Card: React.FC<CardProps> = ({ title, result, subtitle, icon, warning }) => {
  const colorClass = warningColors[warning];
  return (
    <div className="rounded-2xl shadow-lg bg-white dark:bg-zinc-800 p-6 flex flex-col justify-between
                    transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</h3>
        <div className={colorClass}>{icon}</div>
      </div>

      <div className="flex flex-col items-start gap-1">
        <span className={`text-3xl font-bold ${colorClass}`}>{result}</span>
        {subtitle && (
          <span className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</span>
        )}
      </div>

    </div>
  );
};

export default Card;
