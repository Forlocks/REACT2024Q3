import { Component } from 'react';
import { ErrorButton } from './components/ErrorButton/ErrorButton';
import { Searching } from './components/Searching/Searching';
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
