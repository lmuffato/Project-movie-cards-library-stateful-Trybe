import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberInput extends Component {
  render() {
    const { handInputs, value } = this.props;
    return (
      <div>
        <label
          htmlFor="rating-input"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            id="rating-input-label"
            name="rating"
            type="number"
            onChange={ handInputs }
            value={ value }
            data-testid="rating-input"
          />
        </label>
      </div>
    );
  }
}

NumberInput.propTypes = {
  handInputs: PropTypes.func,
  value: PropTypes.number,
}.isRequired;

export default NumberInput;
