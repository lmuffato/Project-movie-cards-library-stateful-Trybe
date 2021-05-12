import React from 'react';
import PropTypes from 'prop-types';

export default function Titulo(props) {
  const { handleChange, value } = props;
  return (
    <label htmlFor="title" data-testid="title-input-label">
      Título
      <input
        id="title"
        type="text"
        value={ value }
        data-testid="title-input"
        onChange={ handleChange }
      />
    </label>
  );
}

Titulo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
