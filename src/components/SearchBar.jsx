import React from 'react';
// import PropTypes from 'prop-types';

function SearchBar({
  searchText,
  onSearchTextChange,
  bookmarkedOnly,
  onBookmarkedChange,
  selectedGenre,
  onSelectedGenreChange,
}) {
    return (
        <form data-testid="search-bar-form">
            <label data-testid="text-input-label">
                Inclui o texto:
                <input type="text" data-testid="text-input" value={searchText} onChange={onSearchTextChange}>
                </input>
            </label>
        </form>
    )
}



export default SearchBar;