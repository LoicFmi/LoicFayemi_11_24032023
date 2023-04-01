import picture from '../assets/img/mountains.png';
import Card from '../components/Cards';

const appartements = [
  {
    id: 123,
    title: 'appartement 1',
    cover: picture,
  },
  {
    id: 456,
    title: 'appartement 2',
    cover: picture,
  },
  {
    id: 789,
    title: 'appartement 3',
    cover: picture,
  },
];

function Home() {
  return (
    <div className="card-wrapper">
      {appartements.map((apt, index) => (
        <Card
          key={`${apt.id}-${index}`}
          title={apt.title}
          picture={apt.cover}
        />
      ))}
    </div>
  );
}

export default Home;
