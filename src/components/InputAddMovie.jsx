import React from 'react';
import PropTypes from 'prop-types';

class InputAddMovie extends React.Component {
  render() {
    const {
      id,
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
          htmlFor={ id }
          data-testid={ testIdLabel }
        >
          { label }
          <input
            type="text"
            onChange={ handle }
            data-testid={ testIdInput }
            name={ inputName }
            value={ inputValue }
            id={ id }
          />
        </label>
      </div>
    );
  }
}

InputAddMovie.propTypes = {
  id: PropTypes.string.isRequired,
  testIdInput: PropTypes.string.isRequired,
  testIdLabel: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.func.isRequired,
  inputName: PropTypes.func.isRequired,
};

export default InputAddMovie;
