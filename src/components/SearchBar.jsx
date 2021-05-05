import React from "react";

export default function SearchBar(props) {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange,
  } = props;

  return (
    <form className='form-container' data-testid='search-bar-form'>
      <label className='label-container'>
        <input
          type='text'
          value={searchText}
          onChange={onSearchTextChange}
          data-testid='text-input'
        />
      </label>
    </form>
  );
}
