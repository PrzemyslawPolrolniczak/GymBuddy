import React from "react";

interface ButtonType {
  customClasses?: String;
}

const Button: React.FC<ButtonType> = props => {
  const { customClasses } = props || null;

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${customClasses}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
