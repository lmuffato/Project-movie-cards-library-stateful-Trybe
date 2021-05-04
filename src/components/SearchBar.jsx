import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            name="search-text"
            value={ searchText }
            onChange={ onSearchTextChange }
            type="text"
          />
        </label>
        <label htmlFor="search-checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            name="search-checkbox"
            onChange={ onBookmarkedChange }
            type="checkbox"
            checked={ bookmarkedOnly }
          />
        </label>
        <label htmlFor="select-gender" data-testid="select-input-label">
          Filtrar por gênero
          <select 
            data-testid="select-input"
            name="select-gender" 
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
}

export default SearchBar;
