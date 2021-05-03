import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    /* bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange */
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
          <label htmlFor="search-text" data-testid="text-input-label" >Inclui o texto:</label>
          <input 
              id="search-text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />

      </form>
    );
  }
}

export default SearchBar;
