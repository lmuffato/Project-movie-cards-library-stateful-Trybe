import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { 
      searchText, 
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="Inclui o texto" data-testid="text-input-label">
            <input type="text" id="Inclui o texto" value={ searchText } onChange={ onSearchTextChange } data-testid="text-input" />
          </label>
          <label htmlFor="Mostrar somente favoritos" data-testid="checkbox-input-label">
            <input type="checkbox" id="Mostrar somente favoritos" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input" />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
