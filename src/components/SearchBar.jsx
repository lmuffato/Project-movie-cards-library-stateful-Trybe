import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor="SearchText"
        >
          Inclui o texto
          <input
            onChange={ onSearchTextChange }
            data-testid="text-input"
            type="text"
            value={ searchText }
            name="SearchText"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="check">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            id="check"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            id="selec-input"
            value={ selectedGenre }
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
  SearchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
