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
      <label data-testid="select-input-label">Filtrar por gênero</label>
      <select
        value={ selectedGenre }
        onChange={ onSelectedGenreChange }
        data-testid="select-input"
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    </form>
  );
}

export default SearchBar;
