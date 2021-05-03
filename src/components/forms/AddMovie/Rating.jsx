import React from 'react';
import PropTypes from 'prop-types';

function Rating({ value, onChange }) {
  return (
    <label htmlFor="rating" data-testid="rating-input-label">
      Avaliação
      <input
        type="number"
        name="rating"
        value={ value }
        data-testid="rating-input"
        onChange={ onChange }
      />
    </label>
  );
}

Rating.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Rating;
