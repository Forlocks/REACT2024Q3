import { Component, ChangeEvent, FormEvent } from 'react';
import { Card } from '../Card/Card';
import './Searching.scss';

export interface Person {
  name: string;
  gender: string;
  birth_year: string;
  height: string;
  mass: string;
}

interface SearchingData {
  textInput: string;
  results: Person[];
}

export class Searching extends Component {
  state: SearchingData = {
    textInput: '',
    results: [],
  };

  handleInputTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      textInput: event.target.value,
    });
  };

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url: string = 'https://swapi.dev/api/people/?page=1&search=';
    const query: string = this.state.textInput;

    try {
      const response = await fetch(url + query);
      const data = await response.json();
      this.setState({
        results: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const results = this.state.results.map((item) => (
      <Card
        key={item.name}
        name={item.name}
        gender={item.gender}
        birth_year={item.birth_year}
        height={item.height}
        mass={item.mass}
      />
    ));

    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            placeholder="luke skywalker"
            onChange={this.handleInputTextChange}
          ></input>
          <button className="button" type="submit">
            search
          </button>
        </form>
        <div className="result-container">{results}</div>
      </>
    );
  }
}
