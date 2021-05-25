import React from 'react';
import PropTypes from 'prop-types';

function Genre(props) {
  const { newState, value } = props;
  return (
    <label htmlFor="genre" data-testid="genre-input-label">
      Gênero
      <select
        name="genre"
        id="genre"
        value={ value }
        data-testid="genre-input"
        onChange={ newState }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    </label>
  );
}

Genre.propTypes = {
  newState: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Genre;
