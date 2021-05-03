// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  // const {searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = 

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <input type="text" name="search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
