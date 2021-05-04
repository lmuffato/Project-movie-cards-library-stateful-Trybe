import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelInput extends Component {
  render() {
    const { id, value, onChange, text, type } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { text }
        <input
          data-testid={ id }
          id={ id }
          value={ value }
          onChange={ onChange }
          type={ type }
        />
      </label>
    );
  }
}

LabelInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
}.isRequired;
LabelInput.defaultProps = {
  value: 0,
};

export default LabelInput;
