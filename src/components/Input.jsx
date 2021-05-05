import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      type,
      label,
      name,
      value,
      testid,
      labelTestId,
      onChange,
    } = this.props;
    return (
      <label htmlFor={ name } data-testid={ labelTestId }>
        {label}
        <input
          type={ type }
          name={ name }
          value={ value }
          data-testid={ testid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
