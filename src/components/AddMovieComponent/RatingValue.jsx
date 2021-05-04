import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingValue extends Component {
  render() {
    const { value, handleValue } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          value={ value }
          onChange={ handleValue }
        />

      </label>
    );
  }
}

export default RatingValue;

RatingValue.propTypes = {
  value: PropTypes.number.isRequired,
  handleValue: PropTypes.func.isRequired,
};
