import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating, handleInputs } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default Rating;
