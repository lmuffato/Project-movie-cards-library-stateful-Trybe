import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputGeneric from './InputGeneric';

class SearchBar extends Component {
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
        <InputGeneric
          name="text"
          type="text"
          onChange={ onSearchTextChange }
          textLabel="Inclui o texto:"
          value={ searchText }
        />

        <InputGeneric
          name="checkbox"
          type="checkbox"
          onChange={ onBookmarkedChange }
          textLabel="Mostrar somente favoritos"
          value={ searchText }
          checked={ bookmarkedOnly }
        />

        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="select-input"
            data-testid="select-input"
            value={ selectedGenre }
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
