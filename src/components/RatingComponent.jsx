import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingComponent extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingComponent.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default RatingComponent;
