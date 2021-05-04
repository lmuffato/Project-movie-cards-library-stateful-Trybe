import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText } = this.props;
    const { onSearchTextChange } = this.props;
    const { bookmarkedOnly } = this.props;
    const { onBookmarkedChange } = this.props;
    const { onSelectedGenreChange } = this.props;
    const { selectedGenre } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="search-input"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="checkbox-input"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero

          <select
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
            id="select-input"
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

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,

};

export default SearchBar;
