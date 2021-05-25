// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-text" data-testid="text-input-label">
          Inlcui o texto:
          <input
            type="text"
            data-testid="text-input"
            id="input-text"
            onChange="onSearchTextChange"
            value="searchText"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
