import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form>

      </form>
    );
  }
}

export default SearchBar;