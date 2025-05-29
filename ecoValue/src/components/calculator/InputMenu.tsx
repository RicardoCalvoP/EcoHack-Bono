import React from "react";
import Input from "./Input";

type InputProps = {
  label: string;
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
        <div key={index} className="InputMenu-content">
          <div className="InputMenu-label">
            {input.label}
          </div>

          < Input
            key={index}
            value={input.value}
            onChange={input.onChange}
            placeholder={input.placeholder}
            type={input.type}
          />
        </div>
      ))}
    </div>
  );
};

export default InputMenu;