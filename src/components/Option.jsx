import React from 'react';

import PropTypes from 'prop-types';

function Option({ movie, dataId }) {
  const { kindMovieText, kindMovieValue } = movie;

  return (
    <option value={ kindMovieValue } data-testid={ dataId }>
      {kindMovieText}
    </option>
  );
}

Option.propTypes = {
  movie: PropTypes.shape({
    kindMovieText: PropTypes.string.isRequired,
    kindMovieValue: PropTypes.string.isRequired,
  }).isRequired,
  dataId: PropTypes.string.isRequired,
};

export default Option;
