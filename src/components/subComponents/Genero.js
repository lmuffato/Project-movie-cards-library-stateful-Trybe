import React from 'react';
import PropTypes from 'prop-types';

export default function Genero(props) {
  const { handleChange, value } = props;
  return (
    <label htmlFor="genre" data-testid="genre-input-label">
      Gênero
      <select
        name="filter"
        id="genre"
        data-testid="genre-input"
        value={ value }
        onChange={ handleChange }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    </label>
  );
}

Genero.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
