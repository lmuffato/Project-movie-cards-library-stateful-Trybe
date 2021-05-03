import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      onSearchTextChange,
      searchText,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="myInputText">
          Inclui o texto:
          <input
            id="myInputText"
            onChange={ onSearchTextChange }
            type="text"
            value={ searchText }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="myInputCheckbox">
          Mostrar somente favoritos:
          <input
            id="myInputCheckbox"
            onChange={ onBookmarkedChange }
            type="checkbox"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="mySelect">
          Filtrar por gênero:
          <select
            id="mySelect"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
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
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
