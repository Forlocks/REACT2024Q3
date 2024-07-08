import { Component } from 'react';
import './Form.scss';
import { SearchingButton } from '../Buttons/SearchingButton/SearchingButton';
import { SearchingInput } from '../SearchingInput/SearchingInput';

export class Form extends Component {
  render() {
    return (
      <form className="form">
        <SearchingInput />
        <SearchingButton />
      </form>
    );
  }
}
