// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
// onSelectedGenreChange

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, onSearchTextChange,
      onBookmarkedChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label
            data-testid="text-input-label"
            htmlFor="search-input"
          >
            Inclui o texto:
            <input
              id="search-input"
              type="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>

          <label
            htmlFor="favorit"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              id="favorit"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              type="checkbox"
              onChange={ onBookmarkedChange }
            />
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
