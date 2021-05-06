import React from 'react';
import Proptypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText } = this.props;
    const { onSearchTextChange } = this.props;
    const { bookmarkedOnly } = this.props;
    const { onBookmarkedChange } = this.props;
    const { selectedGenre } = this.props;
    const { onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="element-input-text">
          Inclui o texto
          <input
            type="text"
            id="element-input-text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="element-input-checkbox">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="element-input-checkbox"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="element-select">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            id="element-select"
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
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

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};

export default SearchBar;
