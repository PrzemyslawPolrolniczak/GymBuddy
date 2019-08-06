import React from "react";
import { Link } from "react-router-dom";
import SubTile from "../../components/SubTile/SubTile";

interface Exercise {
  name: string;
  series: number;
  time?: string;
  reps?: number;
}

const warmupRoutine: Exercise[] = [
  { name: "threadmill", series: 1, time: "5 min" },
  { name: "arms circling", series: 1, reps: 15 },
  { name: "arms swinging left-right", series: 1 },
  { name: "arms swinging up-down", series: 1 },
  { name: "elbows circling", series: 1 },
  { name: "wrists circling", series: 1 },
  { name: "trunk rotation", series: 1 },
  { name: "leg swing forward-backward", series: 1 },
  { name: "leg swing sideways", series: 1 },
  { name: "ankle mobilization", series: 1 }
];

const Warmup: React.FC = () => {
  return (
    <div className="w-full">
      {warmupRoutine.map(({ name, series, reps, time }) => (
        <Link
          key={name}
          to={{
            pathname: "exercise/",
            state: {
              name,
              series,
              reps,
              time
            }
          }}
        >
          <div className="mt-2 mb-2">
            <SubTile name={name} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Warmup;
