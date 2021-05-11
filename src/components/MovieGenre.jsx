import React from 'react';
import PropTypes from 'prop-types';

class MovieGenre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="movieGender">
        Gênero
        <select
          data-testid="genre-input"
          id="moviegenrte"
          name="genre"
          value={ genre }
          onChange={ handleChange }
        >
          <option name="genre" value="action" data-testid="genre-option">Ação</option>
          <option name="genre" value="comedy" data-testid="genre-option">Comédia</option>
          <option name="genre" value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MovieGenre;
