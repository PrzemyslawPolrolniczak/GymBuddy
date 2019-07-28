import React from "react";

interface SubTileProps {
  name: string;
}

const SubTile: React.FC<SubTileProps> = props => {
  const { name } = props;

  return (
    <div className="rounded p-4 border border-white border-solid text-white capitalize">
      {name}
    </div>
  );
};

export default SubTile;
