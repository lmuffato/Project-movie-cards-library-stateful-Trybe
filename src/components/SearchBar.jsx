import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {

    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor="text-input"
        >
          Inclui o texto:
          <input
            data-testid="text-input"
            name="searchText"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label
          data-testid="checkbox-input-label"
          htmlFor="checkbox-input"
        >
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
