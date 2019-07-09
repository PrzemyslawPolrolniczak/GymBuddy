import React from "react";

interface ButtonType {
  customClasses?: String;
}

const Button: React.FC<ButtonType> = props => {
  const { customClasses } = props || null;

  return (
    <button className={`text-white font-bold py-2 px-4 ${customClasses}`}>
      {props.children}
    </button>
  );
};

export default Button;
