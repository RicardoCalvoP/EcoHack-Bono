import React from "react";
type InputProps = {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  type?: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, type = "text" }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = Number(event.target.value);
    onChange(numericValue);
  };


  return (
    <input
      type={type}
      value={value === 0 ? "" : value}
      onChange={handleChange}
      placeholder={placeholder}
      className="input"
    />

  );
};

export default Input;