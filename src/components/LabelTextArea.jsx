import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelTextArea extends Component {
  render() {
    const { id, value, onChange, text } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { text }
        <textarea
          data-testid={ id }
          id={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

LabelTextArea.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string,
}.isRequired;

export default LabelTextArea;
