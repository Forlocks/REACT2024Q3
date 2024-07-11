import { Component } from 'react';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { Searching } from '../Searching/Searching';
import './App.scss';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

export class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="app">
          <ErrorButton />
          <Searching />
        </div>
      </ErrorBoundary>
    );
  }
}
