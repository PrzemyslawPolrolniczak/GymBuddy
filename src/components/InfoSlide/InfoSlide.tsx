import React from "react";
import './InfoSlide.scss';

interface InfoSlideProps {
  title: string;
  value: string | number;
  animation?: string;
}

const InfoSlide: React.FC<InfoSlideProps> = props => {
  const { title, value, animation } = props;
  return (
    <div className={`text-center slide__${animation}`}>
      <h1 className="mb-4">{title}</h1>
      <div className="flex items-center justify-center mb-4 relative">
        <div className="flex items-center justify-center border border-solid border-blue-300 h-40 w-40 rounded-full">
          <h1 className="text-xl">{value}</h1>
        </div>
      </div>
    </div>
  );
};

export default InfoSlide;
