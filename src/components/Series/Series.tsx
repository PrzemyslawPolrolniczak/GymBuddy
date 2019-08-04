import React from "react";

import "./Series.scss";

const Series: React.FC = () => {
  return (
    <div className="series">
      <div className="series__count">Series 1</div>
      <div className="entry">
        <input className="entry__input" type="number" />
        <span className="entry__description">Reps</span>
      </div>
      <div className="entry">
        <input className="entry__input" type="number" />
        <span className="entry__description">Weight</span>
      </div>
    </div>
  );
};

export default Series;
