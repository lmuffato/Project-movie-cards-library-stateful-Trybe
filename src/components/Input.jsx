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

    // https://stackoverflow.com/questions/33471880/dynamic-tag-name-in-jsx-and-react
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

// https://reactjs.org/docs/typechecking-with-proptypes.html
Input.propTypes = {
  CustomTag: PropTypes.string,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  CustomTag: 'input',
  checked: false,
  value: '',
  type: 'text',
};

export default Input;
