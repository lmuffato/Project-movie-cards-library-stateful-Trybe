import React from 'react';
import PropTypes from 'prop-types';

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
      <label data-testid="text-input-label" htmlFor="searchText">
        Inclui o texto:
        <input
          id="searchText"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>

      <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
        Mostrar somente favoritos
        <input
          id="bookmarkedOnly"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  /* selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func, */
};
