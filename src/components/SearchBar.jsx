import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input">
          <input id="input" />
        </label>
      </form>
    );
  }
}
