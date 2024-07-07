import { Component } from 'react';
import { SearchingInput } from './components/SearchingInput/SearchingInput';
import { ResultsContainer } from './components/ResultContainer/ResultsContainer';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <>
        <SearchingInput />
        <ResultsContainer />
      </>
    );
  }
}
