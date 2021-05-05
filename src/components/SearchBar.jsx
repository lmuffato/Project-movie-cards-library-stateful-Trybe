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
      <label data-testid='text-input-label'>
        Inclui o texto:

        <input
          type='text'
          value={searchText}
          onChange={onSearchTextChange}
          data-testid='text-input'
        />

      </label>
      <label data-testid='checkbox-input-label'>
        Mostrar somente favoritos

        <input
          type='checkbox'
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid='checkbox-input'
        />

      </label>
    </form>
  );
}
