import React, { useState } from "react";
import Button from "../Button/Button";

const Radio: React.FC = () => {
  const [activeOption, setOption] = useState(0);

  return (
    <div className="mb-4">
      <Button
        customClasses="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l w-1/2"
        selected={activeOption === 0}
        onClick={() => setOption(0)}
      >
        Option 1
      </Button>
      <Button
        customClasses="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r w-1/2"
        selected={activeOption === 1}
        onClick={() => setOption(1)}
      >
        Option 2
      </Button>
    </div>
  );
};

export default Radio;
