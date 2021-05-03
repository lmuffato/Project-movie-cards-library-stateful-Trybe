import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <div className="form-group">
          <label htmlFor="search-text" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              id="search-text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="checkbox"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="filter-by-gender" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="filter-by-gender"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>

        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
