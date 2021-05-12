import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { 
      searchText, 
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="Inclui o texto" data-testid="text-input-label">
            <input type="text" id="Inclui o texto" value={ searchText } onChange={ onSearchTextChange } data-testid="text-input" />
          </label>
          <label htmlFor="Mostrar somente favoritos" data-testid="checkbox-input-label">
            <input type="checkbox" id="Mostrar somente favoritos" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input" />
          </label>
          <label htmlFor="Filtrar por gênero" data-testid="select-input-label">
            <select id="Filtrar por gênero" value={ selectedGenre } onChange={ onSelectedGenreChange } data-testid="select-input">
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
