import React, { useState, useEffect } from 'react';
import apiFetch from '../../services/fetch/fetch-api';
import { useParams } from 'react-router-dom';
import noUser from '../../images/noUser.jpg';
import PropTypes from 'prop-types';
import { CastList, Item, Wrapper } from './Cast.styled';

export default function Cast(params) {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  let queryParams = `https://api.themoviedb.org/3/movie/${movieId}/credits?`;

  useEffect(() => {
    apiFetch
      .fetchApi(queryParams)
      .then(actors => {
        setCast(actors.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [queryParams]);

  return (
    <Wrapper>
      <p>Additional Information</p>
      <CastList>
        {cast.length !== 0 ? (
          cast.map(({ name, profile_path, character, id }) => (
            <Item key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : noUser
                }
                alt={name}
                width="150"
              />
              <h3>{name}</h3>
              <p>
                Character: <span>{character}</span>
              </p>
            </Item>
          ))
        ) : (
          <Item>Information is not available</Item>
        )}
      </CastList>
    </Wrapper>
  );
}

Cast.propTypes = {
  movieId: PropTypes.number,
};
