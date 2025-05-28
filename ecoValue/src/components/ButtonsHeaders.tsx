import React, { useState } from "react";

type ButtonsHeadersProps = {
  headers: string[];
};

const ButtonsHeaders: React.FC<ButtonsHeadersProps> = ({ headers }) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  return (
    <div className="CardMenu">
      {headers.map((header, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`button ${clickedIndex === index
            ? "isClicked"
            : ""
            }`}
        >
          {header}
        </button>
      ))}
    </div>
  );
};

export default ButtonsHeaders;
