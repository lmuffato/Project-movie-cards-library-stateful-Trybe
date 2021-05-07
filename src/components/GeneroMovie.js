import React from 'react';
import PropTypes from 'prop-types';

function GeneroMovie(props) {
  const { genre, handlechange } = props;
  return (
    <label htmlFor="gênero" data-testid="genre-input-label">
      Gênero
      <select
        name="genre"
        value={ genre }
        onChange={ handlechange }
        data-testid="genre-input"
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    </label>
  );
}

GeneroMovie.defaultProps = {
  genre: '',
  handlechange: '',
};

GeneroMovie.propTypes = {
  genre: PropTypes.string,
  handlechange: PropTypes.func,
};

export default GeneroMovie;
