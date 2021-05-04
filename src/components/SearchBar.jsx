import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-input">
            Inclui o texto:
            <input
              value={ searchText }
              data-testid="text-input"
              name="text-input"
              onChange={ onSearchTextChange }
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="checkbox">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              name="checkbox"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
