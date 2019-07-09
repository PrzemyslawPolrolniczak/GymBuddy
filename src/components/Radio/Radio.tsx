import React from "react";
import Button from "../Button/Button";

const Radio: React.FC = () => {
  return (
    <div className="mb-4">
      <Button customClasses="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l w-1/2">
        Set 1
      </Button>
      <Button customClasses="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r w-1/2">
        Set 2
      </Button>
    </div>
  );
};

export default Radio;
