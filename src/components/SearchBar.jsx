import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    // const eventTarget = (event) => event.target.value;
    const { 
    SearchText, 
    onSearchTextChange, 
    bookmarkedOnly, 
    onBookmarkedChange,
    selectedGenre, 
    onSelectedGenreChange  
    } = this.props

    console.log(bookmarkedOnly);
    return (
      <form data-testid="search-bar-form">
        <input value={ SearchText } onChange={ onSearchTextChange } type="text"  />
        <input type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
      </form>
      
    )
  }
}

export default SearchBar;
