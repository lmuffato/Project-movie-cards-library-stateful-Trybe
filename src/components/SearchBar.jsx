// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, onSearchTextChange,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="search-input">
            Inclui o texto:
            <input
              id="search-input"
              type="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
              name="searchText"
            />
          </label>
          <label htmlFor="favorit" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="favorit"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              type="checkbox"
              onChange={ onBookmarkedChange }
              name="bookmarkedOnly"
            />
          </label>
          <label data-testid="select-input-label" htmlFor="gender">
            Filtrar por gênero
            <select
              data-testid="select-input"
              id="gender"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              name="selectedGenre"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
