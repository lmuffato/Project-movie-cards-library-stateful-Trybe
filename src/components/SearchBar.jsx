import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <input onChange={ onSearchTextChange } type="text" />
      </div>
    );
  }
}

export default SearchBar;
