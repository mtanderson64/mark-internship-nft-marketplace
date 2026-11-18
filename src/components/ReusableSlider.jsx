
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const ReusableSlider = ({ children }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1171px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      "(max-width: 991px)": {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(max-width: 765px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
  });

  return (
    <div className="collections-slider-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>

      <div className="collections-slider-controls">
        <button
          type="button"
          onClick={() => instanceRef.current?.prev()}
          aria-label="Previous slide"
        >
          ❮
        </button>

        <button
          type="button"
          onClick={() => instanceRef.current?.next()}
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ReusableSlider;
