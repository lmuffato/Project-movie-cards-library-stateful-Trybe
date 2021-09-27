import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Digite a avaliação IMDB:
        <input
          type="number"
          value={ rating }
          data-testid="rating-input"
          name="rating"
          onChange={ handleChange }
          className="text-input-addMovie"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default Rating;
