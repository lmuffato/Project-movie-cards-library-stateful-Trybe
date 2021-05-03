import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({
  searchText,
  onSearchTextChange,
}) {
  return (
    <form data-testid="search-bar-form">
      <label htmlFor="searchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
}.isRequired;

export default SearchBar;
