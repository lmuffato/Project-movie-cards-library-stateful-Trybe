import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">Inclui o texto</label>
          <input
            type="text"
            data-testid="text-input"
            value="searchText"
            onChange="onSearchTextChange"
          />
          <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
}.isRequired;

export default SearchBar;
