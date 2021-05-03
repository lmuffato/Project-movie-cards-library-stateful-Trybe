import React from 'react';
import PropTypes from 'prop-types';

function Title({ value, onChange }) {
  return (
    <label htmlFor="imagePath" data-testid="image-input-label">
      Imagem
      <input
        type="text"
        name="imagePath"
        value={ value }
        data-testid="image-input"
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
