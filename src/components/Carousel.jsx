import { useState } from 'react';
import arrow from '../assets/svg/arrow.svg';

function Carousel({ slideShow }) {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex(index + 1);
    if (index === slideShow.length - 1) setIndex(0);
  };

  const previous = () => {
    setIndex(index - 1);
    if (index === 0) setIndex(slideShow.length - 1);
  };

  return (
    <div className="carousel">
      <img className="carousel__img" src={slideShow[index]} alt="" />
      {slideShow.length > 1 && (
        <>
          <img
            className="carousel__arrow carousel__arrow__right"
            src={arrow}
            alt="show next"
            onClick={next}
          />
          <img
            className="carousel__arrow carousel__arrow__left"
            src={arrow}
            alt="show previous"
            onClick={previous}
          />
          <p className="carousel__counter">
            {index + 1} / {slideShow.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;
