import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      text,
      dataTestidLabel,
      dataTestidInput,
      name,
      onChange,
      value,
      type,
    } = this.props;

    return (
      <div>
        <label className="labels" data-testid={ dataTestidLabel } htmlFor={ name }>
          {text}
          <input
            className="input"
            data-testid={ dataTestidInput }
            value={ value }
            type={ type }
            name={ name }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  text: PropTypes.string,
  dataTestidLabel: PropTypes.string,
  dataTestidInput: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
}.isRequired;

export default Input;
