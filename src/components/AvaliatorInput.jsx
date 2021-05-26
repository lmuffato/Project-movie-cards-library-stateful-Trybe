import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvaliatorInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="rating-input-label"
          htmlFor="rating"
        >
          Avaliação
          <input
            id="rating"
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
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AvaliatorInput;
