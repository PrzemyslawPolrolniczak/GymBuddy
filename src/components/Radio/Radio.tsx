import React, { useState } from "react";
import Button from "../Button/Button";

interface RadioProps {
  options: string[];
}

const Radio: React.FC<RadioProps> = props => {
  const [activeOption, setOption] = useState(0);
  const { options } = props;

  return (
    <div className="mb-4">
      {options.map(option => {
        const index = options.indexOf(option);
        return (
          <Button
          customClasses={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l w-1/${options.length}`}
          selected={activeOption === index}
          onClick={() => setOption(index)}
          key={option}
        >
          {option}
          </Button>
        )
      })}
    </div>
  );
};

export default Radio;
