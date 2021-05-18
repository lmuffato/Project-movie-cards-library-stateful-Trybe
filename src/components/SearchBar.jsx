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
    <form className="searchBar-form" data-testid="search-bar-form">
      <label htmlFor="textBar" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="textBar"
          className="textbar"
          data-testid="text-input"
          placeholder="Pesquise filmes, séries, animes"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
      <label htmlFor="bookmark" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          className="check-box"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
      <label htmlFor="genre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="genre"
          id="genre"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
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

export default SearchBar;
