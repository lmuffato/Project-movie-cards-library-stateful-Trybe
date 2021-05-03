import React from 'react';
import PropTypes from 'prop-types';

function NumberInput(props) {
  const { value, onChange } = props;

  return (
    <label htmlFor="number-input" data-testid="rating-input-label">
      Avaliação
      <input
        type="number"
        name="rating"
        data-testid="rating-input"
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

NumberInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

NumberInput.defaultProps = {
  value: 0,
};

export default NumberInput;
