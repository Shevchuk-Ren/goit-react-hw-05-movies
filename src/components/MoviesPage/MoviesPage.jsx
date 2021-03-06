import React, { useState, useEffect } from 'react';
import apiFetch from '../../services/fetch/fetch-api';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Searchbar from '../SearchBar';
import { Item, Wrapper } from './MoviesPage.styled';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default function MoviesPage(params) {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useLocalStorage('movies', []);
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  const { url } = useRouteMatch();
  let queryParams = `https://api.themoviedb.org/3/search/movie?`;

  useEffect(() => {
    if (location.search === '') {
      window.localStorage.clear();
      setMovies([]);
      return;
    } else {
      setStatus('resolved');
    }
    if (!query) {
      return;
    }
    setStatus('pending');
    apiFetch
      .fetchApi(queryParams, query)
      .then(movies => {
        setMovies(movies.results);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
      });
  }, [location.search, query, queryParams, setMovies]);

  const handleSubmit = search => {
    window.localStorage.setItem('url', url + `?query=${search}`);
    setQuery(search);
  };

  if (status === 'idle') {
    return (
      <Wrapper>
        <Searchbar onSubmit={handleSubmit}></Searchbar>
      </Wrapper>
    );
  }
  if (status === 'pending') {
    return (
      <Wrapper>
        <Searchbar onSubmit={handleSubmit}></Searchbar>
        <p>Loading...</p>
      </Wrapper>
    );
  }

  if (status === 'resolved') {
    return (
      <Wrapper>
        <Searchbar onSubmit={handleSubmit}></Searchbar>

        {movies.length !== 0 ? (
          <ul className="movies-list">
            {movies.map(({ name, original_title, id }) => (
              <li key={id}>
                <Item
                  className="movies-item"
                  to={{
                    pathname: `/movies/${id}`,
                    state: { from: location },
                  }}
                >
                  {name ? name : original_title}
                </Item>
              </li>
            ))}
          </ul>
        ) : (
          <p>Enter correct film's name</p>
        )}
      </Wrapper>
    );
  }
}
