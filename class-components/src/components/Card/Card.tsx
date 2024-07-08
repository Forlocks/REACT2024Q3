import { Component } from 'react';
import { Person } from '../Searching/Searching';
import './Card.scss';

export class Card extends Component<Person> {
  render() {
    const { name, gender, birth_year, height, mass } = this.props;

    return (
      <div className="card">
        <h3>{name}</h3>
        <p>Gender: {gender}</p>
        <p>Birth year: {birth_year}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
      </div>
    );
  }
}
