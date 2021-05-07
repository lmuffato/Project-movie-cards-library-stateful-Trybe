// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    //   selectdGenre,
    //   onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text1" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            onChange={ onSearchTextChange }
            value={ searchText }
            id="text1"
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="check1">
          Mostrar somente favoritos
          <input
            type="checkbox"
            onChange={ onBookmarkedChange }
            id="check1"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
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
