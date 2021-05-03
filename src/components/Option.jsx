import React from 'react';

import PropTypes from 'prop-types';

function Option({ movie }) {
  const { kindMovieText, kindMovieValue } = movie;

  return (
    <option value={ kindMovieValue } data-testid="select-option">
      {kindMovieText}
    </option>
  );
}

Option.propTypes = {
  movie: PropTypes.shape({
    kindMovieText: PropTypes.string.isRequired,
    kindMovieValue: PropTypes.string.isRequired,
  }).isRequired,
};

export default Option;
