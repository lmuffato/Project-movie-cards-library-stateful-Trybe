import React from 'react';
import PropTypes from 'prop-types';

export default function Subtitulo(props) {
  const { handleChange, value } = props;
  return (
    <label htmlFor="subtitle" data-testid="subtitle-input-label">
      Subtítulo
      <input
        id="subtitle"
        type="text"
        value={ value }
        data-testid="subtitle-input"
        onChange={ handleChange }
      />
    </label>
  );
}

Subtitulo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
