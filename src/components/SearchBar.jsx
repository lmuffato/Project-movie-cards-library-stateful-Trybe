import React, { Component } from 'react';
import Input from './Input';
// import PropTypes from 'prop-types';

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
      <form data-testid="search-bar-form">
        <Input
          text="Inclui o texto:"
          dataTestidLabel="text-input-label"
          dataTestidInput="text-input"
          name="name"
          onChange={ onSearchTextChange }
          value={ searchText }
        />

        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            value={ searchText }
            type="checkbox"
            name="checkbox"
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero:
          <select
            data-testid="select-input"
            value={ selectedGenre }
            name="select"
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

export default SearchBar;
