import { useParams } from 'react-router-dom';

function Housing() {
  const { housingId } = useParams();

  return (
    <div>
      <h1>Housing</h1>
      <h2>Logement n° {housingId}</h2>
    </div>
  );
}

export default Housing;
