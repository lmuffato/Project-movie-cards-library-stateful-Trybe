import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { inputValue, handle } = this.props;
    return (
      <div>
        <label
          htmlFor="rating-input"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            type="number"
            onChange={ handle }
            data-testid="rating-input"
            name="rating"
            value={ inputValue }
            id="rating-input"
          />
        </label>
      </div>
    );
  }
}

InputNumber.propTypes = {
  handle: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
};

export default InputNumber;
