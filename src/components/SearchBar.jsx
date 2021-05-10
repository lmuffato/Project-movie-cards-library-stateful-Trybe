import React from 'react';

class SearchBar extends React.Component {
  render() {

    const {
      searchText, 
      onSearchTextChange, 
      bookmarkedOnly, 
      onBookmarkedChange, 
      selectGenre, 
      onSelectedGenreChange} = this.props
    
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label"> Inclui o texto: </label>
        <br></br>
        <input data-testid="text-input"
          type = 'text'
          value = { searchText }
          onChange = { onSearchTextChange }
        />
        <br></br>
        <label data-testid="checkbox-input-label"> Mostrar somente favoritos </label>
        <br></br>
        <input data-testid="checkbox-input"
          type = 'checkbox'
          checked = { bookmarkedOnly }
          onChange = {onBookmarkedChange}
        />
      </form>
    ) 
  }
}

export default SearchBar