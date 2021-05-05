import React from 'react';

class SearchBar extends React.Component {
  render(){
    const { searchText, onSearchTextChange, onBookmarkedChanged, selectedGenre, onSelectedGenreChange } = this.props

    return(
      <div>
      <label data-testid="text-input-label">
        Inclui o texto: 
      <input 
      type="text"
      name="searchText"
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
      <br />

      <label data-testid="select-input-label" >
      Filtrar por gênero
        <select
        value={selectedGenre}
        onChange={onSelectedGenreChange}
        name="selectedGenre"
        data-testid="select-input">
        <option data-testid="select-option" name="selectedGenre" value="">Todos</option>
        <option data-testid="select-option" name="selectedGenre" value="action">Ação</option>
        <option data-testid="select-option" name="selectedGenre" value="comedy">Comédia</option>
        <option data-testid="select-option" name="selectedGenre" value="thriller">Suspense</option>
        </select>
      </label>

      </div>
    )
  }
}

export default SearchBar;