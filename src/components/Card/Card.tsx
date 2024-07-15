import { Person } from '../../hooks/useSearch';
import './Card.scss';

export const Card: React.FC<Person> = ({
  name,
  gender,
  birth_year,
  height,
  mass,
}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Gender: {gender}</p>
      <p>Birth year: {birth_year}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
    </div>
  );
};
