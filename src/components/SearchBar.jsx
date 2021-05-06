import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form className="search-form" data-testid="search-bar-form">
        <label htmlFor="search-text" data-testid="text-input-label">
          <span>Inclui o texto:</span>
          <input
            data-testid="text-input"
            name="search-text"
            value={ searchText }
            onChange={ onSearchTextChange }
            type="text"
          />
        </label>
        <label htmlFor="search-checkbox" data-testid="checkbox-input-label">
          <span>Mostrar somente favoritos:</span>
          <input
            data-testid="checkbox-input"
            name="search-checkbox"
            onChange={ onBookmarkedChange }
            type="checkbox"
            checked={ bookmarkedOnly }
          />
        </label>
        <label htmlFor="select-genre" data-testid="select-input-label">
          <span>Filtrar por gênero:</span>
          <select
            data-testid="select-input"
            name="select-genre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
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

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
