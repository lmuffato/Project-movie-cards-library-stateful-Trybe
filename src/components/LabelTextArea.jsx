import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelTextArea extends Component {
  render() {
    const { value, id, onChange, text } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { text }
        <textarea
          data-testid={ id }
          value={ value }
          id={ id }
          onChange={ onChange }
        />
      </label>
    );
  }
}

LabelTextArea.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  onchange: PropTypes.func,
}.isRequired;

export default LabelTextArea;
