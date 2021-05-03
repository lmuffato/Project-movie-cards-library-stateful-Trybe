// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onSearchTextChange, searchText, onBookmarkedChange } = this.props;
    const { bookmarkedOnly, onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <div>
            <label data-testid="text-input-label" htmlFor="filter">
              Inclui o texto
              <input
                data-testid="text-input"
                onChange={ onSearchTextChange }
                value={ searchText }
                type="text"
                name="filter"
              />
            </label>
          </div>
          <div>
            <label data-testid="checkbox-input-label" htmlFor="favoritos">
              Mostrar somente favoritos
              <input
                data-testid="checkbox-input"
                onChange={ onBookmarkedChange }
                checked={ bookmarkedOnly }
                type="checkbox"
                name="favoritos"
              />
            </label>
          </div>
          <label data-testid="select-input-label" htmlFor="gender">
            Filtrar por gênero
            <select
              data-testid="select-input"
              onChange={ onSelectedGenreChange }
              value={ selectedGenre }
              name="gender"
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

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
