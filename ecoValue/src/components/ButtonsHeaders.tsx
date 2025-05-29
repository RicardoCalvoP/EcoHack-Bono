import React from "react";

type ButtonsHeadersProps = {
  headers: string[];
  onHeaderClick: (index: number) => void;
  activeTab: number;
}


const ButtonsHeaders: React.FC<ButtonsHeadersProps> = ({ headers, onHeaderClick, activeTab }) => {

  const handleClick = (index: number) => {
    onHeaderClick(index); // comunicar al componente padre
  };

  return (
    <div className="ButtonMenu">
      {headers.map((header, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`button ${activeTab === index ? "isClicked" : ""}`}
        >
          {header}
        </button>
      ))}
    </div>
  );
};

export default ButtonsHeaders;