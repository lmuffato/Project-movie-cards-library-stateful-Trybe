import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGeneric extends Component {
  render() {
    const { name, type, onChange, textLabel, value, checked } = this.props;
    const valueExtra = checked ? { checked } : { value };

    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { textLabel }
        <input
          id={ name }
          name={ name }
          type={ type }
          onChange={ onChange }
          data-testid={ `${name}-input` }
          { ...valueExtra }
        />
      </label>
    );
  }
}

InputGeneric.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

InputGeneric.defaultProps = {
  checked: false,
};

export default InputGeneric;
