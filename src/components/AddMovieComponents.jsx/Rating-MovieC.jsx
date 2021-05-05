import React from 'react';
import PropTypes from 'prop-types';

class RatingMovieC extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="ratingMovie">
        Avaliação
        <input
          data-testid="rating-input"
          id="ratingMovie"
          value={ rating }
          type="number"
          name="rating"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingMovieC.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingMovieC;
