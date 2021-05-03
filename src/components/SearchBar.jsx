// implement AddMovie component here

import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label
          id="text-input-label"
          htmlFor="inputSearchBar"
          data-testid="text-input-label"
        >
          Inclui o texto
          <input
            name="inputSearchBar"
            type="text"
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <label htmlFor="" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
