import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({
  searchText,
  onSearchTextChange,
  bookmarkedOnly,
  onBookmarkedChange,
  // selectedGenre,
  // onSelectedGenreChange,
}) {
  return (
    <form data-testid="search-bar-form">
      <label htmlFor="SearchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>

      <label htmlFor="check" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          name="check"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.d,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.func.isRequired,
}.isRequired;

export default SearchBar;
