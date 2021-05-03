import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // onSearchTextChange, bookmarkedOnly, selectedGenre, onSelectedGenreChange
    const { searchText,
      onSearchTextChange,
      onBookmarkedChange,
      bookmarkedOnly } = this.props;
    return (
      <form data-testid="search-bar-form">
        <div>
          <label htmlFor="search-text" data-testid="text-input-label">
            Inclui o texto
            <input
              id="search-text"
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="search-checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="search-checkbox"
              data-testid="checkbox-input"
              type="checkBox"
              onChange={ onBookmarkedChange }
              checked={ bookmarkedOnly }
            />
          </label>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

export default SearchBar;
