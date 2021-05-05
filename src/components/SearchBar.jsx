import React from "react";
import PropTypes from "prop-types";
export default function SearchBar(props) {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    /* selectedGenre,
    onSelectedGenreChange, */
  } = props;

  return (
    <form className="form-container" data-testid="search-bar-form">
      
        <label data-testid="text-input-label" htmlFor="text">
          Inclui o texto:
        </label>
        <input
          id="text"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
        />

      
        <label data-testid="checkbox-input-label">
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

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  /* selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func, */
};
