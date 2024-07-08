import { Component } from 'react';
import { Card } from '../Card/Card';
import './ResultContainer.scss';

export class ResultContainer extends Component {
  render() {
    return (
      <div className="result-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
