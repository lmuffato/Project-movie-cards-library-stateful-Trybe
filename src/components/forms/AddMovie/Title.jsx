import React from 'react';
import PropTypes from 'prop-types';

function Title({ value, onChange }) {
  return (
    <label htmlFor="title" data-testid="title-input-label">
      Título
      <input
        type="text"
        name="title"
        value={ value }
        data-testid="title-input"
        onChange={ onChange }
      />
    </label>
  );
}

Title.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Title;
