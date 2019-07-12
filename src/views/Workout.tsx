import React from "react";
import { Link } from "react-router-dom";
import Tile from "../components/Tile/Tile";

import Warmup from "../assets/images/rozgrzewka.jpg";
import Benchpress from "../assets/images/benchpress.jpg";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <div>Workout</div>
      <Link to="warmup/">
        <Tile text="Warmup" image={Warmup} />
      </Link>
      <Tile text="Bench press" image={Benchpress} />
    </React.Fragment>
  );
};

export default Home;
