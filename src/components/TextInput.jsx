import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
  const { value, onChange } = props;

  return (
    <label htmlFor="searchInput" data-testid="text-input-label">
      Inclui o texto:
      <input
        type="text"
        name="searchInput"
        value={ value }
        onChange={ onChange }
        data-testid="text-input"
      />
    </label>
  );
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
