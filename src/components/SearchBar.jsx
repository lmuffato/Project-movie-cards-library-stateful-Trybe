import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <div >
          <label htmlFor="search" data-testid="text-input-label">
            Inclui o texto
            <input
              id="search"
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
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
};

export default SearchBar;
