import React from "react";
import { Link } from "react-router-dom";
import SubTile from "../../components/SubTile/SubTile";

const warmupRoutine = [
  { id: 1, name: "threadmill" },
  { id: 2, name: "arms circling" },
  { id: 3, name: "arms swinging left-right" },
  { id: 4, name: "arms swinging up-down" },
  { id: 5, name: "elbows circling" },
  { id: 6, name: "wrists circling" },
  { id: 7, name: "trunk rotation" },
  { id: 8, name: "leg swing forward-backward" },
  { id: 9, name: "leg swing sideways" },
  { id: 10, name: "ankle mobilization" }
];

const Warmup: React.FC = () => {
  return (
    <div className="w-full">
      {warmupRoutine.map(({ id, name }) => (
        <Link to="exercise/" key={id} params={name}>
          <div className="mt-2 mb-2">
            <SubTile name={name} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Warmup;
