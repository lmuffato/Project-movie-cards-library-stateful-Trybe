import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    // , bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <div className="form-group">
          <label htmlFor="search-text" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="search-text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  // bookmarkedOnly: PropTypes.bool,
  // onBookmarkedChange: PropTypes.func,
  // selectedGenre: PropTypes.string,
  // onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
