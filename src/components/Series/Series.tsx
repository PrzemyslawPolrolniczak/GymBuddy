import React, { useState } from "react";

import "./Series.scss";

interface SeriesProps {
  number: number;
  time?: string;
  reps?: number;
}

const Series: React.FC<SeriesProps> = props => {
  const [isDone, setDone] = useState(false);
  const { number, time, reps } = props;

  return (
    <div className={`series ${isDone ? "series--done" : ""}`}>
      <div className="series__count" onClick={() => setDone(!isDone)}>
        Series {number} {isDone && <div className="series__icon">&#x2714;</div>}
      </div>
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
