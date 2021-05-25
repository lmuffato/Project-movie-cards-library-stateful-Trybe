// implement AddMovie component here
import React from 'react';
import Proptypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-text" data-testid="text-input-label">
          Inlcui o texto:
          <input
            type="text"
            data-testid="text-input"
            id="input-text"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="input-checkbox">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked="bookmarkedOnly"
            id="input-checkbox"
            onChange="onBookmarkedChange"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.string.isRequired,
};
