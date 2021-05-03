// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, onSelectedGenreChange, selectedGenre } = this.props;
    console.log('Entrei na classe SearchBar');
    return (
      <form className="form-filter" data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto
            <input onChange={onSearchTextChange} value={searchText} type="text" data-testid="text-input"></input>
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type="checkbox" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={onBookmarkedChange}></input>
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select onChange={onSelectedGenreChange} value={selectedGenre} data-testid="select-input">
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    )
  }
}

export default SearchBar;