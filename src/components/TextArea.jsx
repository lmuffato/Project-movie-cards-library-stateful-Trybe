import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { id, text, value, onChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {text}
        <textarea data-testid={ id } value={ value } onChange={ onChange } />
      </label>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default TextArea;
