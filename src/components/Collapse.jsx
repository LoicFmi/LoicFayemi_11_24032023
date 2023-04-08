import { useState } from 'react';
import arrow from '../assets/svg/arrow.svg';

function Collapse({ title, text }) {
  const [state, setState] = useState(false);
  return (
    <div className="collapse">
      <h1 className="collapse__title" onClick={() => setState(!state)}>
        {title}
        <img
          className={
            state ? 'collapse__arrow arrow-down' : 'collapse__arrow arrow-up'
          }
          src={arrow}
          alt="arrow"
          width={24}
        ></img>
      </h1>
      <div className={state ? 'collapse__text open' : 'collapse__text closed'}>
        {Array.isArray(text)
          ? text.map((item, index) => {
              return (
                <p className="collapse__text__item" key={index}>
                  {item}
                </p>
              );
            })
          : text}
      </div>
    </div>
  );
}

export default Collapse;
