import React from 'react';

function SearchBar({
  searchText,
  onSearchTextChange,
  bookmarkedOnly,
  onBookmarkedChange,
  selectedGenre,
  onSelectedGenreChange }) {
  return (
    <form data-testid="search-bar-form"></form>
  );
}

export default SearchBar;
