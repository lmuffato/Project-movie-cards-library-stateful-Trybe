import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input"
          value={ value }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Rating;
