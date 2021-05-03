// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { onSearchTextChange, searchText } = this.props
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="filter">Inclui o texto</label>
          <input data-testid="text-input" onChange={onSearchTextChange} value={searchText} type="text" name="filter" id="filter" />
        </form>
      </div>
    );
  }
}

export default SearchBar;