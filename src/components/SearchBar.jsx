import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Pude implementar este código corretamente com ajuda do Guilherme Dornelles.
// Excelente instrutor!

class SearchBar extends Component {
  render() {
    const { onSearchTextChange, searchText, bookmarkedOnly } = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form className="formSearch" data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            id="text-input"
            onChange={ onSearchTextChange }
            type="text"
            value={ searchText }
            data-testid="text-input"
            name="searchText"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="input-checkbox">
          Mostrar somente favoritos:
          <input
            id="input-checkbox"
            onChange={ onBookmarkedChange }
            type="checkbox"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            name="bookmarkedOnly"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="genders">
          Filtrar por gênero:
          <select
            id="genders"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
            data-testid="select-input"
            name="gender"
          >
            <options data-testid="select-option" value="">Todos</options>
            <options data-testid="select-option" value="action">Ação</options>
            <options data-testid="select-option" value="comedy">Comédia</options>
            <options data-testid="select-option" value="thriller">Suspense</options>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func,
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
