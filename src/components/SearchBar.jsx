import React from 'react';
import SearchFavorite from './SearchFavorite';

export default class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input">
          Inclui o texto
          <input id="input" type="text" />
        </label>
        <SearchFavorite />
      </form>
    );
  }
}
