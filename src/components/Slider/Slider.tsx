import React, { useState } from "react";
import InfoSlide from "../InfoSlide/InfoSlide";

interface Slide {
  id: number;
  title: string;
  value: string | number;
}

const slides: Slide[] = [
  { id: 0, title: "Aktualna waga", value: "91 kg" },
  { id: 1, title: "Suma dni treningowych", value: "2" },
  { id: 2, title: "Opuszczone dni treningowe", value: "0" },
  { id: 3, title: "Zrzucone kilogramy", value: "0" }
];

const Slider: React.FC = () => {
  const [activeSlide, setSlide] = useState(1);

  const handleSlideChange = (direction: string): void => {
    const { length } = slides;
    if (direction === "left" && activeSlide === 0) {
      setSlide(length - 1);
    } else if (direction !== "left" && activeSlide === length - 1) {
      setSlide(0);
    } else {
      direction === "left"
        ? setSlide(activeSlide - 1)
        : setSlide(activeSlide + 1);
    }
  };

  return (
    <div className="mb-4 relative">
      <div
        className="absolute left-0"
        onClick={() => handleSlideChange("left")}
      >
        &lt;
      </div>
      <div
        className="absolute right-0"
        onClick={() => handleSlideChange("right")}
      >
        &gt;
      </div>
      {slides.map(slide => {
        const { id, title, value } = slide;
        return (
          id === activeSlide && (
            <InfoSlide title={title} value={value} key={id} />
          )
        );
      })}
    </div>
  );
};

export default Slider;
