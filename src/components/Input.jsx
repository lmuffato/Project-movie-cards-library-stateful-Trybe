import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      label,
      text,
      input,
      name,
      type,
      value,
      checked,
      onChange,
    } = this.props;

    return (
      <label htmlFor={ input } data-testid={ label }>
        {text}
        <input
          data-testid={ input }
          name={ name }
          type={ type }
          value={ value }
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  checked: false,
  value: '',
};

export default Input;
