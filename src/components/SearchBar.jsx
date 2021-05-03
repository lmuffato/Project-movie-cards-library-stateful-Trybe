import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="input-text" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              onChange={ onSearchTextChange }
              value={ searchText }
              data-testid="text-input"
              id="input-text"
            />
          </label>
          <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
              id="input-checkbox"
            />
          </label>
        </form>
      </div>
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
