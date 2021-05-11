import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ value }
          data-testid="rating-input"
          onChange={ changes }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.string,
  changes: PropTypes.func,
}.isRequired;

export default RatingInput;
