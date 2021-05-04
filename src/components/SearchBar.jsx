// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="seach-bar-form">
        <label
          data-testeid="text-input-label"
          htmlFor="search-area"
        >
          Inclui o texto:
          <input
            id="serach-area"
            type="text"
            value={ searchText }
            onChange={ onSeacrhTextChange }
            data-testid="text-input-label"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
