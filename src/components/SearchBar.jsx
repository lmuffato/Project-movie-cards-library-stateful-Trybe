import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

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
          name="searchText"
          onChange={ onSearchTextChange }
          value={ searchText }
        />
        <div>
          <label className="labels" htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos:
            <input
              className="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              value={ searchText }
              type="checkbox"
              name="bookmarkedOnly"
              onChange={ onBookmarkedChange }
            />
          </label>
        </div>
        <div>
          <label className="labels" htmlFor="selectedGenre" data-testid="select-input-label">
            Filtrar por gênero:
            <select
              className="input"
              data-testid="select-input"
              value={ selectedGenre }
              name="selectedGenre"
              onChange={ onSelectedGenreChange }
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
