import React from "react";
// import { RouteComponentProps } from "react-router-dom";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = props => {
  const { text } = props;
  return (
    <header className="fixed top-0 left-0 right-0 p-4 shadow-white">
      <h1 className="text-xl">{text}</h1>
    </header>
  );
};

export default Header;
