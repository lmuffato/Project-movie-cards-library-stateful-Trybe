import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-input">
            Inclui o texto:
            <input
              value={ searchText }
              data-testid="text-input"
              name="text-input"
              onChange={ onSearchTextChange }
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="checkbox">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              name="checkbox"
            />
          </label>
          <label data-testid="select-input-label" htmlFor="select">
            Filtrar por gênero
            <select
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              name="select"
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
