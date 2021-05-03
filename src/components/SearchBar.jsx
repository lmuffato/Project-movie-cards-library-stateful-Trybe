import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          <input type="textarea" value={ searchText } onChange={ onSearchTextChange } />
        </label>
      </form>
    );
  }
}
SearchBar.propTypes = {

};

export default SearchBar;
