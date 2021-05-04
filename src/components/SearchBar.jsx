import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    const { searchText, selectedGenre, bookmarkedOnly  } = this.props;
    return (
      <form data-testid="search-bar-form" />
    );
  }
}

export default SearchBar;
