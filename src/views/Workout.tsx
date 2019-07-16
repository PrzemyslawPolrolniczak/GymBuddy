import React from "react";
import { Link } from "react-router-dom";
import Tile from "../components/Tile/Tile";

import Warmup from "../assets/images/rozgrzewka.jpg";
import Benchpress from "../assets/images/benchpress.jpg";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Link to="warmup/">
        <Tile text="Warmup" image={Warmup} />
      </Link>
      <Link to="training/">
        <Tile text="Training" image={Benchpress} />
      </Link>
    </div>
  );
};

export default Home;
