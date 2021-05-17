import React, { Component } from 'react';
import { string, func, bool } from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-name">
          Inclui o texto:
          <input
            id="text-name"
            type="text"
            value={ searchText }
            data-testid="text-input"
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="check-name">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="check-name"
            type="checkbox"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-name">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="select-name"
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

SearchBar.propTypes = {
  searchText: string,
  onSearchTextChange: func,
  bookmarkedOnly: bool,
  onBookmarkedChange: func,
  selectedGenre: string,
  onSelectedGenreChange: func,
}.isRequired;

export default SearchBar;
