import React, { useState } from "react";
import InfoSlide from "../InfoSlide/InfoSlide";

interface Slide {
  id: number;
  title: string;
  value: string | number;
}

const slides: Slide[] = [
  { id: 0, title: "Aktualna waga", value: "91 kg" },
  { id: 1, title: "Suma dni treningowych", value: 2 },
  { id: 2, title: "Opuszczone dni treningowe", value: 0 },
  { id: 3, title: "Zrzucone kilogramy", value: 0 }
];

enum Direction {
  Left = "left",
  Right = "right",
  LeftToRight = "left-to-right",
  RightToLeft = "right-to-left"
}

const Slider: React.FC = () => {
  const [activeSlide, setSlide] = useState(1);
  const [currentAnimation, setAnimation] = useState("appear");

  const animate = (direction: Direction, slideToSet: number): void => {
    setAnimation(`disappear--${direction}`);
    setTimeout(() => {
      setSlide(slideToSet);
      setAnimation(`appear--${direction}`);
    }, 1000);
  };

  const handleSlideChange = (direction: Direction): void => {
    const { length } = slides;
    if (direction === Direction.Left) {
      const slideToSet = activeSlide === 0 ? length - 1 : activeSlide - 1;
      animate(Direction.LeftToRight, slideToSet);
    } else if (direction === Direction.Right) {
      const slideToSet = activeSlide === length - 1 ? 0 : activeSlide + 1;
      animate(Direction.RightToLeft, slideToSet);
    }
  };

  return (
    <div className="mb-4 relative">
      <div
        className="absolute left-0 z-10 select-none"
        onClick={() => handleSlideChange(Direction.Left)}
      >
        &lt;
      </div>
      <div
        className="absolute right-0 z-10 select-none"
        onClick={() => handleSlideChange(Direction.Right)}
      >
        &gt;
      </div>
      {slides.map(slide => {
        const { id, title, value } = slide;
        return (
          id === activeSlide && (
            <InfoSlide
              title={title}
              value={value}
              key={id}
              animation={currentAnimation}
            />
          )
        );
      })}
    </div>
  );
};

export default Slider;
