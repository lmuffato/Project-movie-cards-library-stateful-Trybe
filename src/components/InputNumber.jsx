import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const {
      testIdLabel,
      testIdInput,
      label,
      inputValue,
      handle,
      inputName,
    } = this.props;
    return (
      <div>
        <label
          htmlFor={ testIdInput }
          data-testid={ testIdLabel }
        >
          { label }
          <input
            type="number"
            onChange={ handle }
            data-testid={ testIdInput }
            name={ inputName }
            value={ inputValue }
            id={ testIdInput }
          />
        </label>
      </div>
    );
  }
}

InputNumber.propTypes = {
  testIdInput: PropTypes.string.isRequired,
  testIdLabel: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.number.isRequired,
  inputName: PropTypes.string.isRequired,
};

export default InputNumber;
