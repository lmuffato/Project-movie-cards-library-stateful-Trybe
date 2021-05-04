import React from 'react';
import PropTypes from 'prop-types';

class InputAddMovie extends React.Component {
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
            type="text"
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

InputAddMovie.propTypes = {
  testIdInput: PropTypes.string.isRequired,
  testIdLabel: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
};

export default InputAddMovie;
