import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { id, text, value, type, onChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {text}
        <input type={ type } data-testid={ id } value={ value } onChange={ onChange } />
      </label>
    );
  }
}

InputText.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputText;
