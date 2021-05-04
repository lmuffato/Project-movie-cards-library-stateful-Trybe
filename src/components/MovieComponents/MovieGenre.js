import React from 'react';
import propTypes from 'prop-types';

class MovieGenre extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ handleChange }
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

MovieGenre.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
