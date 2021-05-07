import React from 'react';
import PropTypes from 'prop-types';

function AvaliacaoMovie(props) {
  const { rating, handlechange } = props;
  return (
    <label htmlFor="avaliação" data-testid="rating-input-label">
      Avaliação
      <input
        type="number"
        name="rating"
        value={ rating }
        onChange={ handlechange }
        data-testid="rating-input"
      />
    </label>
  );
}

AvaliacaoMovie.defaultProps = {
  rating: 0,
  handlechange: '',
};

AvaliacaoMovie.propTypes = {
  rating: PropTypes.number,
  handlechange: PropTypes.func,
};

export default AvaliacaoMovie;
