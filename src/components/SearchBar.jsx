import React from 'react';

function SearchBar({
  searchText,
  onSearchTextChange,
  bookmarkedOnly,
  onBookmarkedChange,
  selectedGenre,
  onSelectedGenreChange }) {
  return (
    <form data-testid="search-bar-form">
      <label data-testid="text-input-label">Inclui o texto:</label>
      <input
        type="text"
        value={ searchText }
        onChange={ onSearchTextChange }
        data-testid="text-input"
      />
      <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
      <input
        type="checkbox"
        checked={ bookmarkedOnly }
        onChange={ onBookmarkedChange }
        data-testid="checkbox-input"
      />
    </form>
  );
}

export default SearchBar;
