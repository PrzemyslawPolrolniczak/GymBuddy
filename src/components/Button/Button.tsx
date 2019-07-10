import React from "react";
import "./Button.scss";

interface ButtonType {
  customClasses?: String;
  selected?: boolean;
  onClick?: any;
}

const Button: React.FC<ButtonType> = props => {
  const { customClasses } = props || null;

  return (
    <button
      className={`text-white font-bold py-2 px-4 btn relative ${customClasses} ${
        props.selected ? "selected" : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
