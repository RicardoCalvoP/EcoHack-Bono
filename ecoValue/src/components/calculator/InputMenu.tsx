import React, { useState } from "react";
import Input from "./Input";

type InputProps = {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  type?: string;
};

type InputMenuProps = {
  inputs: InputProps[];
};

const InputMenu: React.FC<InputMenuProps> = ({ inputs }) => {
  return (
    <div className="InputMenu">
      {inputs.map((input, index) => (
        <Input
          key={index}
          value={input.value}
          onChange={input.onChange}
          placeholder={input.placeholder}
          type={input.type}
        />
      ))}
    </div>
  );
};

export default InputMenu;