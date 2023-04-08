import { React, useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../logements.json';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import orangeStar from '../assets/img/orangestar.png';
import greyStar from '../assets/img/greystar.png';

function Housing() {
  const apartmentId = useParams('id').id;
  const currentApartment = logements.filter(
    (logement) => logement.id === apartmentId
  );
  const [slideShow, setSlideShow] = useState([]);

  useEffect(() => {
    if (currentApartment.length > 0) {
      setSlideShow(currentApartment[0].pictures);
    }
  }, [currentApartment]);

  return (
    <>
      {currentApartment.length > 0 ? (
        <>
          <Carousel slideShow={slideShow} />
          <main className="apartment">
            <div className="apartment__content">
              <div className="apartment__content__infos">
                <h1 className="apartment__content__infos__title">
                  {currentApartment[0].title}
                </h1>
                <p className="apartment__content__infos__location">
                  {currentApartment[0].location}
                </p>
                <div className="apartment__content__infos__tags">
                  {currentApartment[0].tags.map((tag, index) => {
                    return (
                      <button
                        className="apartment__content__infos__tags__button"
                        key={index}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="apartment__content__host">
                <div className="apartment__content__host__profile">
                  <div className="apartment__content__host__profile__name">
                    <span>{currentApartment[0].host.name.split(' ')[0]}</span>
                    <span>{currentApartment[0].host.name.split(' ')[1]}</span>
                  </div>
                  <img
                    className="apartment__content__host__profile__picture"
                    src={currentApartment[0].host.picture}
                    alt="host"
                  />
                </div>

                <div className="apartment__content__host__profile__note">
                  {[...Array(5)].map((note, index) => {
                    const ratingValue = index + 1;
                    return (
                      <img
                        className="apartment__content__host__profile__note__stars"
                        key={index}
                        src={
                          ratingValue <= currentApartment[0].rating
                            ? orangeStar
                            : greyStar
                        }
                        alt="rating"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="apartment__collapse">
              <div className="collapse-housing">
                <Collapse
                  title={'Description'}
                  text={currentApartment[0].description}
                />
              </div>
              <div className="collapse-housing">
                <Collapse
                  title={'Équipements'}
                  text={currentApartment[0].equipments}
                />
              </div>
            </div>
          </main>
        </>
      ) : (
        <Navigate to="*" />
      )}
    </>
  );
}

export default Housing;
