import React from 'react';

class SearchBar extends React.Component {
  render() {

    const {
      label, 
      searchText, 
      onSearchTextChange, 
      bookmarkekOnly, 
      onBookmarkedChange, 
      selectGenre, 
      onSelectedGenreChange} = this.props
    
    return (
      <form data-testid="search-bar-form">
        {label}
        <br></br>
        <input
        value = {searchText}
        onChange = {onSearchTextChange}
        />
      </form>
    ) 
  }
}

export default SearchBar