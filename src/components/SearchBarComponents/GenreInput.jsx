import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          name="selectedGenre"
          data-testid="select-input"
        >
          <option data-testid="select-option" name="selectedGenre" value="">
            Todos
          </option>
          <option data-testid="select-option" name="selectedGenre" value="action">
            Ação
          </option>
          <option data-testid="select-option" name="selectedGenre" value="comedy">
            Comédia
          </option>
          <option data-testid="select-option" name="selectedGenre" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

GenreInput.defaultProps = {
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

GenreInput.propTypes = {
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default GenreInput;
