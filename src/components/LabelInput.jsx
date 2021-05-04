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
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
LabelInput.defaultProps = {
  value: 0,
};

export default LabelInput;
