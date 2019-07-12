import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import DzikPoints from "../components/DzikPoints/DzikPoints";
import Slider from "../components/Slider/Slider";
import Radio from "../components/Radio/Radio";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <DzikPoints />
      <Slider />
      <Radio options={["Set 1", "Set 2"]} />
      <Link to="/workout/">
        <Button customClasses="w-full block border-b-4 bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500 rounded">
          Start Workout
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default Home;
