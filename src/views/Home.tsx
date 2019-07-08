import React from "react";
import Button from "../components/Button/Button";
import DzikPoints from "../components/DzikPoints/DzikPoints";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <div>Home</div>
      <DzikPoints />
      <Button customClasses="w-full block">Start Workout</Button>
    </React.Fragment>
  );
};

export default Home;
