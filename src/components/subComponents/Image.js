import React from 'react';
import PropTypes from 'prop-types';

export default function Image(props) {
  const { handleChange, value } = props;
  return (
    <label htmlFor="imagePath" data-testid="image-input-label">
      Imagem
      <input
        id="imagePath"
        type="text"
        value={ value }
        data-testid="image-input"
        onChange={ handleChange }
      />
    </label>
  );
}

Image.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
