// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-area" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="search-area"
            name="search-area"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="favorites-area" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="favorites-area"
            name="favorites-area"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="select-area" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="select-area"
            name="select-area"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
