import React from "react";
import { RouteComponentProps } from "react-router-dom";

import Header from "../../components/Header/Header";
import Series from "../../components/Series/Series";

const Exercise: React.FC<RouteComponentProps> = props => {
  const { name, series, reps, time } = props.location.state;

  const seriesArray = Array.from({ length: series }, (v, k) => k);

  return (
    <div className="pt-10 w-full">
      <Header text={name} />
      <div className="h-64 w-full border border-solid border-black" />
      <div className="mt-3">
        {Array.from({ length: series }, (v, k) => {
          return <Series key={k} number={k + 1} reps={reps} time={time} />;
        })}
      </div>
    </div>
  );
};

export default Exercise;
