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
      </form>
    );
  }
}

export default SearchBar;
