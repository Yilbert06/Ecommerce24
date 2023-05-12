import React, { useState } from "react";
import "./style/sliderImgs.css";

const SliderImgs = ({ product }) => {
  const [numberImg, setNumberImg] = useState(1);

  const objStyle = {
    transform: `translateX(calc(-${numberImg} / 3 * 100%))`
  };
  const handlePrev = () => {
    if (numberImg - 1 < 0) {
      setNumberImg(2);
    } else {
      setNumberImg(numberImg - 1);
    }
  };

  const handleNext = () => {
    if (numberImg + 1 > 2) {
      setNumberImg(0);
    } else {
      setNumberImg(numberImg + 1);
    }
  };

  return (
    <div className="slider">
      <button onClick={handlePrev} className="slider__arrowhead slider__left">
        &#60;
      </button>
      <div style={objStyle} className="slider__interior">
        {product?.images.map((imgInfo) => (
          <div key={imgInfo.id} className="slider__img-container">
            <img
              className="slider__img"
              src={imgInfo.url}
              alt=""
              />
          </div> 
          ))}
          <div>
            </div>
      </div>
      <button onClick={handleNext} className="slider__arrowhead slider__right">
        &gt;
      </button>
    </div>
  );
};

export default SliderImgs;
