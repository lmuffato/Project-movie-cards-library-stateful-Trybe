// implement AddMovie component here
import React from 'react';
import Proptypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, searchText, onBookmarkedChange } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            data-testid="text-input"
            name="input-text"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="input-checkbox">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked="bookmarkedOnly"
            data-testid="checkbox-input"
            id="input-checkbox"
            onChange={ onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="id-genre">
          Filtrar por gênero
          <select
            id="id-genre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: Proptypes.string,
  onSearchTextChange: Proptypes.func,
  onBookmarkedChange: Proptypes.func,
}.isRequired;
