import React from 'react';
import PropTypes from 'prop-types';

class GenreMovieC extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genderMovie">
        Gênero
        <select
          data-testid="genre-input"
          id="genderMovie"
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

GenreMovieC.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default GenreMovieC;
