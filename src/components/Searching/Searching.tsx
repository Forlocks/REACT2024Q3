import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import './Searching.scss';
import loadingImage from '../../assets/loading.png';
import { useLastRequest } from '../../hooks/useLastRequest';

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
  const [lastRequest, updateLastRequest] = useLastRequest();

  useEffect(() => {
    const fetchData = async (request: string) => {
      setLoadingStatus(true);
      const trimmedRequest = request.trim();
      const url =
        trimmedRequest === ''
          ? 'https://swapi.dev/api/people/?page=1'
          : `https://swapi.dev/api/people/?search=${trimmedRequest}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setSearchingResults(data.results || []);
      } catch (error) {
        console.log(error);
      }

      setLoadingStatus(false);
    };

    setTextInput(lastRequest);
    fetchData(lastRequest);
  }, [lastRequest]);

  const handleInputTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateLastRequest(textInput);
  };

  let content;

  if (loadingStatus) {
    content = (
      <div className="loading-container">
        <img className="loading" src={loadingImage} alt="loading" />
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
        />
        <button className="button" type="submit">
          search
        </button>
      </form>
      <div className="result-container">{content}</div>
    </>
  );
};
