import React from 'react';

class SearchBar extends React.Component {
  render(){
    const { searchText, onSearchTextChange, onBookmarkedChanged } = this.props

    return(
      <div>
      <label data-testid="text-input-label">
        Inclui o texto: 
      <input 
      type="text"
      name="searchedText"
      value={searchText}
      onChange={onSearchTextChange}
      data-testid="text-input"
      >
      </input>
      </label>
      <br />
      <label data-testid="checkbox-input-label">
      Mostrar somente favoritos
      <input 
      type="checkbox"
      data-testid="checkbox-input"
      name="bookmarkedOnly"
      onChange={onBookmarkedChanged}
      >
      </input>
      </label>

      </div>
    )
  }
}

export default SearchBar;