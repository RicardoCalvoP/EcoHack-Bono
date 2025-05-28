import React, { useState } from "react";

type ButtonsHeadersProps = {
  headers: string[];
  onHeaderClick: (index: number) => void;
};

const ButtonsHeaders: React.FC<ButtonsHeadersProps> = ({ headers, onHeaderClick }) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
    onHeaderClick(index); // comunicar al componente padre
  };

  return (
    <div className="ButtonMenu">
      {headers.map((header, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`button ${clickedIndex === index ? "isClicked" : ""}`}
        >
          {header}
        </button>
      ))}
    </div>
  );
};

export default ButtonsHeaders;