import React from "react";
import { RouteComponentProps } from "react-router-dom";

import Header from "../../components/Header/Header";

const Exercise: React.FC<RouteComponentProps> = props => {
  const { name } = props.location.state;
  return (
    <div className="pt-10 w-full">
      <Header text={name} />
      <div className="h-64 w-full border border-solid border-black" />
    </div>
  );
};

export default Exercise;
