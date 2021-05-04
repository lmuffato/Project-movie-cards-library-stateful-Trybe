import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Título
        <input
          id="rating-input"
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ handleChange }
        />
      </label>

    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default RatingInput;
