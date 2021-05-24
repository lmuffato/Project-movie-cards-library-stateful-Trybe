import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      SearchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor="incluiTexto"
          value={ onSearchTextChange }
        >
          Inclui o texto:
          <input
            id="incluiTexto"
            data-testid="text-input"
            type="text"
            value={ SearchText }
          />
        </label>
        <label data-testid="text-input-label" htmlFor="check">
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
            <option value="todos" data-testid="select-option"> </option>
            <option value="Ação" data-testid="select-option">action</option>
            <option value="Comédia" data-testid="select-option">comedy</option>
            <option value="Suspense" data-testid="select-option">thriler</option>
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
