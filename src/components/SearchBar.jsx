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
    <form className="searchBar-form">
      <input
        type="text"
        id="textbar"
        placeholder="Pesquise filmes, séries, animes"
        value={ searchText }
        onChange={ onSearchTextChange }
      />
      <label htmlFor="bookmark">
        <input
          type="checkbox"
          className="check-box"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        Mostrar somente
      </label>
      <label htmlFor="genre">
        <select
          name="genre"
          id="genre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="Comédia">Comedy</option>
          <option value="thriller">Suspense</option>
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
