import React from "react";
import { Link } from "react-router-dom";
import SubTile from "../components/SubTile/SubTile";

const Warmup: React.FC = () => {
  return (
    <div className="w-full">
      <Link to="huh/">
        <SubTile />
      </Link>
    </div>
  );
};

export default Warmup;
