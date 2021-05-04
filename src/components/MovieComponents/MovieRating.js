import React from 'react';
import propTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default MovieRating;

MovieRating.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
};
