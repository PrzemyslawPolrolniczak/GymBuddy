import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import DzikPoints from "../components/DzikPoints/DzikPoints";
import Slider from "../components/Slider/Slider";
import Select from "../components/Select/Select";

const trainingOptions = [
  {id: 'fbw-saker-a', text: "Saker FBW - Trening A"},
  {id: 'fbw-saker-b', text: "Saker FBW - Trening B"}
]

const Home: React.FC = () => {
  const [selectedOption, setOption] = useState('');

  const trainingSelect = option => {
    setOption(option);
  }

  return (
    <div className="w-full flex flex-col justify-between">
      <div >
        <DzikPoints />
        <Slider />
        <Select placeholder="Select your training" options={trainingOptions} onSelect={trainingSelect} selected={selectedOption} />
      </div>
      <div>
        <Link to="/workout/">
          <Button customClasses="w-full block bg-main-300 hover:bg-blue-500 rounded" disabled={selectedOption ? false : true}>
            Start Workout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
