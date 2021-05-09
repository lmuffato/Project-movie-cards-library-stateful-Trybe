import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      CustomTag,
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
        <CustomTag
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
  CustomTag: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  checked: false,
  value: '',
  type: 'text',
};

export default Input;
