// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">

          <div>
            <label htmlFor="textInput" data-testid="text-input-label">
              Inclui o texto
            </label>
            <input
              id="textInput"
              type="text"
              onChange={ onSearchTextChange }
              value={ searchText }
              data-testid="text-input"
            />
          </div>

          <div>
            <label htmlFor="radioInput" data-testid="checkbox-input-label">
              Mostrar somente favoritos
            </label>
            <input
              id="radioInput"
              type="checkbox"
              onChange={ onBookmarkedChange }
              checked={ bookmarkedOnly }
              data-testid="checkbox-input"
            />
          </div>

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
