import React from 'react';

import { shape, string } from 'prop-types';

function Option({ movie, dataId }) {
  const { kindMovieText, kindMovieValue } = movie;

  return (
    <option value={ kindMovieValue } data-testid={ dataId }>
      {kindMovieText}
    </option>
  );
}

Option.propTypes = {
  movie: shape({
    kindMovieText: string.isRequired,
    kindMovieValue: string.isRequired,
  }).isRequired,
  dataId: string.isRequired,
};

export default Option;
