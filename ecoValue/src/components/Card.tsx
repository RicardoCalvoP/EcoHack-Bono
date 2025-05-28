import React from "react";

type ButtonProps = {
  title: string;
  result: string;
  subtitle: string;
  icon: React.ReactNode;
  warning: string;
};

const Card: React.FC<ButtonProps> = ({ title, result, subtitle, icon, warning }) => {
  return (
    <div className="Card-content">
      <div className="Card-header">
        <div className="Card-title">{title}</div>
      </div>
      <div className={`Card-result Card-result-${warning}`}>
        <p>{result}</p>
        <div className="Card-icon">{icon}</div>
      </div>
      {subtitle && <p className="Card-subtitle">{subtitle}</p>}
    </div>
  );
};

export default Card;
