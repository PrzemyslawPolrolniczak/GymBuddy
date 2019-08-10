import React, { useState } from "react";

import Select from "../Select/Select";

import "./TimeSeries.scss";

interface TimeSeriesProps {
  seriesCount: number;
  time: string;
}

const opts = [{ text: "sec" }, { text: "min" }, { text: "hrs" }];
const topOpts = [{ text: "-0.25" }, { text: "-0.5" }];

const Series: React.FC<TimeSeriesProps> = props => {
  const [isDone, setDone] = useState(false);
  const [selectedOption, setOption] = useState("");
  const { seriesCount, time } = props;

  const setTimeUnit = unit => {
    setOption(unit);
  };

  return (
    <div className={`series ${isDone ? "series--done" : ""}`}>
      <div className="series__count" onClick={() => setDone(!isDone)}>
        Series {seriesCount}{" "}
        {isDone && <div className="series__icon">&#x2714;</div>}
      </div>
      {time && (
        <>
          <div className="entry">
            <input
              className={`entry__input ${isDone ? "series--done" : ""}`}
              type="text"
            />
            <span className="entry__description">Time</span>
          </div>
          <div className="entry">
            <Select
              options={opts}
              selected={selectedOption}
              onSelect={setTimeUnit}
              extendClass={`entry__select ${isDone ? "series--done" : ""}`}
              topOptions={topOpts}
            />
            <span className="entry__description">Unit</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Series;
