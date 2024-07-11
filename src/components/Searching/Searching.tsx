import { Component, ChangeEvent, FormEvent } from 'react';
import { Card } from '../Card/Card';
import './Searching.scss';
import loading from '../../assets/loading.png';

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
  loading: boolean;
}

export class Searching extends Component {
  state: SearchingData = {
    textInput: '',
    results: [],
    loading: false,
  };

  componentDidMount = () => {
    const lastRequest = localStorage.getItem('ForlocksAPI') || '';

    this.setState(
      {
        textInput: lastRequest,
        loading: true,
      },
      () => {
        this.handleSubmit();
      },
    );
  };

  handleInputTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      textInput: event.target.value.trim(),
    });
  };

  handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    this.setState({ loading: true });
    localStorage.setItem('ForlocksAPI', this.state.textInput);

    let url: string;
    const request: string = this.state.textInput;

    if (request === '') {
      url = 'https://swapi.dev/api/people/?page=1';
    } else {
      url = 'https://swapi.dev/api/people/?page=1&search=';
    }

    try {
      const response = await fetch(url + request);
      const data = await response.json();
      this.setState({
        results: data.results,
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  };

  render() {
    let content;

    if (this.state.loading) {
      content = (
        <div className="loading-container">
          <img className="loading" src={loading} />
        </div>
      );
    } else if (this.state.results.length > 0) {
      content = this.state.results.map((item) => (
        <Card
          key={item.name}
          name={item.name}
          gender={item.gender}
          birth_year={item.birth_year}
          height={item.height}
          mass={item.mass}
        />
      ));
    } else {
      content = <div className="no-results">no results found</div>;
    }

    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            placeholder="luke skywalker"
            value={this.state.textInput}
            onChange={this.handleInputTextChange}
          ></input>
          <button className="button" type="submit">
            search
          </button>
        </form>
        <div className="result-container">{content}</div>
      </>
    );
  }
}
