import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;