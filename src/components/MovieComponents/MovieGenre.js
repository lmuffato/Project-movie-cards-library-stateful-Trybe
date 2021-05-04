import React from 'react';

class MovieGenre extends React.Component {
  render() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre-input"
          // value={ genre }
          data-testid="genre-input"
          // onChange={ onClick }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default MovieGenre;
