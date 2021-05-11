import React from 'react';
import PropTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="ratingMovie">
        Avaliação
        <input
          data-testid="rating-input"
          id="movieRating"
          value={ rating }
          type="number"
          name="rating"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

MovieRating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
};

MovieRating.defaultProps = {
  rating: 'undefined',
};

export default MovieRating;
