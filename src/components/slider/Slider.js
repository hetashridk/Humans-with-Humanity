import React, { useState, useRef, useEffect } from "react";
import "./slider.css";
import Dog from "../../assests/dog.webp";
import HelpingHand from "../../assests/helping-hand.png";
import Change from "../../assests/bringing-change.png";

const colors = [Dog, HelpingHand, Change];
const delay = 2500;
const text = [
  "Let's be kind towards Animals..!!",
  "Get Involved In Helping Hand",
  "Bringing a change in the society",
];

function Slider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              // style={{ backgroundColor }}
            >
              <img src={backgroundColor} alt="" />
              <h1>{text[index]}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;