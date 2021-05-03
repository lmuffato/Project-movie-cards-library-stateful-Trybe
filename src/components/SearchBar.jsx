// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { onSearchTextChange, searchText, onBookmarkedChange, bookmarkedOnly, onSelectedGenreChange, selectedGenre } = this.props
    return (
      <div>
        <form data-testid="search-bar-form">
          <div>
            <label data-testid="text-input-label" htmlFor="filter">Inclui o texto</label>
            <input data-testid="text-input" onChange={onSearchTextChange} value={searchText} type="text" name="filter" id="filter" />
          </div>
          <div>
            <label data-testid="checkbox-input-label" htmlFor="favoritos">Mostrar somente favoritos</label>
            <input data-testid="checkbox-input" onChange={onBookmarkedChange} checked={bookmarkedOnly} type="checkbox" name="favoritos" id="favoritos"/>
          </div>
          <div>
            <label data-testid="select-input-label" htmlFor="">Filtrar por gênero</label>
            <select data-testid="select-input" onChange={onSelectedGenreChange} value={selectedGenre} name="" id="">
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;