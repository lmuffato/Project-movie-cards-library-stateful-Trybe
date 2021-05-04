import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({
  searchText,
  onSearchTextChange,
  bookmarkedOnly,
  onBookmarkedChange,
  selectedGenre,
  onSelectedGenreChange,
}) {
  return (
    <form data-testid="search-bar-form">
      <label htmlFor="SearchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>

      <label htmlFor="check" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          name="check"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>

      <label htmlFor="genero" data-testid="select-input-label">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

SearchBar.defaultProps = {
  searchTex: '',
  onSearchTextChange: undefined,
  bookmarkedOnly: false,
  onBookmarkedChange: undefined,
  selectedGenre: '',
  onSelectedGenreChange: undefined,
};

export default SearchBar;
