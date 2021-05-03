// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { onSearchTextChange, searchText, onBookmarkedChange, bookmarkedOnly } = this.props
    return (
      <div>
        <form data-testid="search-bar-form">
          <div>
            <label data-testid="text-input-label" htmlFor="filter">Inclui o texto</label>
            <input data-testid="text-input" onChange={onSearchTextChange} value={searchText} type="text" name="filter" id="filter" />
          </div>
          <div>
            <label data-testid="checkbox-input-label" htmlFor="">Mostrar somente favoritos</label>
            <input data-testid="checkbox-input" onChange={onBookmarkedChange} checked={bookmarkedOnly} type="checkbox" name="" id=""/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;