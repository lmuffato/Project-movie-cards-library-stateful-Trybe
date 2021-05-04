import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form" action="">
        <input data-testid="text-input" type="text" />
        <input type="checkbox" />
      </form>

    );
  }
}

export default SearchBar;
