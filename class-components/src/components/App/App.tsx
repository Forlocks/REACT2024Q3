import { Component } from 'react';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { Searching } from '../Searching/Searching';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <ErrorButton />
        <Searching />
      </div>
    );
  }
}
