import React from "react";
import "./Tile.scss";

interface TileProps {
  text: string;
  image: string;
}

const Tile: React.FC<TileProps> = props => {
  const { text, image } = props;

  return (
    <div
      className="tile flex items-center justify-center relative rounded h-32 bg-center bg-cover"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="tile__overlay pl-6 pt-6 absolute inset-0 bg-gray-100 z-10">
        <h1 className="tile__text font-heavy uppercase">{text}</h1>
      </div>
    </div>
  );
};

export default Tile;
