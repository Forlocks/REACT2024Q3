import { Component } from 'react';
import { ErrorButton } from './components/Buttons/ErrorButton/ErrorButton';
import { Form } from './components/Form/Form';
import { ResultContainer } from './components/ResultContainer/ResultContainer';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <ErrorButton />
        <Form />
        <ResultContainer />
      </div>
    );
  }
}
