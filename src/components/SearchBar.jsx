// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  // const {searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} =

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="buscador" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="buscador"
              type="text"
              name="search"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="checkbox"
              type="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
