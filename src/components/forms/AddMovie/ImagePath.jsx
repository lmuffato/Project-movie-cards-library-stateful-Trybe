import React from 'react';
import PropTypes from 'prop-types';

function ImagePath({ value, onChange }) {
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

ImagePath.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default ImagePath;
