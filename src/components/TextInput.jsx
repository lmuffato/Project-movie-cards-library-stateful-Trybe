import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { label, name, value, testid, labelTestId, onChange } = this.props;
    return (
      <label htmlFor="title" data-testid={ labelTestId }>
        {label}
        <input
          type="text"
          name={ name }
          value={ value }
          data-testid={ testid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  labelTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
