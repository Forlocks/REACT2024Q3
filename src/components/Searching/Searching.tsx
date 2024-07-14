import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import './Searching.scss';
import loadingImage from '../../assets/loading.png';

export interface Person {
  name: string;
  gender: string;
  birth_year: string;
  height: string;
  mass: string;
}

export const Searching = () => {
  const [textInput, setTextInput] = useState<string>('');
  const [searchingResults, setSearchingResults] = useState<Person[]>([]);
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);
  const [initialRenderStatus, setInitialRenderStatus] =
    useState<boolean>(false);

  useEffect(() => {
    const lastRequest = localStorage.getItem('ForlocksAPI') || '';

    setTextInput(lastRequest);
    setLoadingStatus(true);

    setInitialRenderStatus(true);
  }, []);

  useEffect(() => {
    if (initialRenderStatus && loadingStatus) {
      handleSubmit();
    }
  }, [initialRenderStatus]);

  const handleInputTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setLoadingStatus(true);
    localStorage.setItem('ForlocksAPI', textInput);

    let url: string;
    const request: string = textInput.trim();

    if (request === '') {
      url = 'https://swapi.dev/api/people/?page=1';
    } else {
      url = 'https://swapi.dev/api/people/?page=1&search=';
    }

    try {
      const response = await fetch(url + request);
      const data = await response.json();
      setSearchingResults(data.results);
    } catch (error) {
      console.log(error);
    }

    setLoadingStatus(false);
  };

  let content;

  if (loadingStatus) {
    content = (
      <div className="loading-container">
        <img className="loading" src={loadingImage} />
      </div>
    );
  } else if (searchingResults.length > 0) {
    content = searchingResults.map((item) => (
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
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="luke skywalker"
          value={textInput}
          onChange={handleInputTextChange}
        ></input>
        <button className="button" type="submit">
          search
        </button>
      </form>
      <div className="result-container">{content}</div>
    </>
  );
};
