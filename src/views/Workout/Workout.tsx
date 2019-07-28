import React from "react";
import { Link } from "react-router-dom";
import Tile from "../../components/Tile/Tile";

import Warmup from "../../assets/images/rozgrzewka.jpg";
import Benchpress from "../../assets/images/benchpress.jpg";

import "./Workout.scss";

const tiles = [
  { text: "warmup", image: Warmup },
  { text: "training", image: Benchpress },
  { text: "stretching", image: Benchpress }
];

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {tiles.map(({ text, image }) => {
        return (
          <div className="tile-wrapper">
            <Link to={`${text}/`}>
              <Tile text={text} image={image} key={text} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
