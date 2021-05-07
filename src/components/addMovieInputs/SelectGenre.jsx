import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { genre, handleGen, addMovie } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genreInput">
        Gênero
        <select
          onChange={ handleGen }
          id="genreInput"
          type="text"
          value={ genre }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button data-testid="send-button" onClick={ addMovie } type="button">
          Adicionar filme
        </button>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  genre: PropTypes.string,
  handleGen: PropTypes.func,
  addMovie: PropTypes.func,
}.isRequired;

export default SelectGenre;
