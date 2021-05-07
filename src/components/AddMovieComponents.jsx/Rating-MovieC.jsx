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

export default RatingMovieC;

RatingMovieC.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
};

RatingMovieC.defaultProps = {
  rating: 'undefined',
};
