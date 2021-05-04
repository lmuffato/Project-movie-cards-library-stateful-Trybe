import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelInput extends Component {
  render() {
    const { id, text, type, onChange, value } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { text }
        <input
          id={ id }
          type={ type }
          value={ value }
          data-testid={ id }
          onChange={ onChange }
        />
      </label>
    );
  }
}

LabelInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  func: PropTypes.func,
  type: PropTypes.string,
  onChange: PropTypes.func,

}.isRequired;

export default LabelInput;
