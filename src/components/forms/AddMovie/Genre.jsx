import React from 'react';
import PropTypes from 'prop-types';

function Genre({ value, onChange }) {
  return (
    <label htmlFor="genre" data-testid="genre-input-label">
      Gênero
      <select
        name="genre"
        value={ value }
        data-testid="genre-input"
        onChange={ onChange }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    </label>
  );
}

Genre.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Genre;
