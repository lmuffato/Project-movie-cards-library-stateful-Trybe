// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="seach-bar-form">
        <label data-testeid="text-input-label" htmlFor="search-area">
          Inclui o texto:
          <input
            id="serach-area"
            type="text"
            value={searchText}
            onChange={onSeacrhTextChange}
            data-testid="text-input"
          />
        </label>
        <label htmlFor="favorites-area" data-testid="checkox-input-label">
          Mostrar somente favoritos
          <input
            id="favorites-area"
            name="favorites-area"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookMarkedChange}
            data-testid="checkbox-input"
          />
        </label>
        <label data-testeid="select-input-label" htmlFor="select-area">
          Filtrar por gênero
          <select
            id="select-area"
            name="select-area"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testeid="select-option"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
