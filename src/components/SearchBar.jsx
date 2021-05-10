import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="incluiTexto" data-testid="text-input-label">
          Inclui o texto:
          <input
            name="searchText"
            id="incluiTexto"
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
            type="text"
          />
        </label>
        <label htmlFor="mostratSomenteFavoritos" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            name="bookmarkedOnly"
            id="mostratSomenteFavoritos"
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            type="checkbox"
          />
        </label>
        <label htmlFor="filtrarPorGenero" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
            id="filtrarPorGenero"
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
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
