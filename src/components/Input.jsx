import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { text, dataTestidLabel, dataTestidInput, name, onChange, value, type } = this.props;

    return (
      <label data-testid={ dataTestidLabel } htmlFor={ name }>
        {text}
        <input
          data-testid={ dataTestidInput }
          value={ value }
          type={ type }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Input;
