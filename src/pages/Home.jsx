import React from 'react';
import Card from '../components/Cards';
import Banner from '../components/Banner';
import logements from '../logements.json';
import sea from '../assets/img/sea.png';

function Home() {
  const bannerText = 'Chez vous, partout et ailleurs';
  return (
    <React.Fragment>
      <Banner picture={sea} text={bannerText} />
      <div className="card-wrapper">
        {logements.map((logement, index) => (
          <Card
            key={`${logement.id}-${index}`}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Home;
