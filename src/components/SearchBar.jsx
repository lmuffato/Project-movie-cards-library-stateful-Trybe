import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="textInput">
            Inclui o texto:
            <input
              value={ searchText }
              data-testid="text-input"
              name="textInput"
              onChange={ onSearchTextChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
