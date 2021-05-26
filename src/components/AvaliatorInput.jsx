import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvaliatorInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="rating-input-label"
          htmlFor="rating-form"
        >
          Avaliação
          <input
            id="rating-form"
            data-testid="rating-input"
            type="number"
            value={ value }
            name="rating"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
AvaliatorInput.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default AvaliatorInput;
