import React from 'react';
import PropTypes from 'prop-types';

export default function Avaliacao(props) {
  const { handleChange, value } = props;
  return (
    <label htmlFor="rating" data-testid="rating-input-label">
      Avaliação
      <input
        id="rating"
        type="number"
        value={ value }
        data-testid="rating-input"
        onChange={ handleChange }
      />
    </label>
  );
}

Avaliacao.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
