// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const moviesGenre = {
  Todos: '',
  Ação: 'action',
  Comédia: 'comedy',
  Suspense: 'thriller',
};

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
      <div>
        <form data-testid="search-bar-form">
          <div>
            <label htmlFor="textInput"
            data-testid="text-input-label">
              Inclui o texto
            </label>
            <input
              id="textInput"
              type="text"
              onChange={onSearchTextChange}
              value={searchText}
              data-testid="text-input"
            />
          </div>
          <div>
            <label htmlFor="radioInput" data-testid="checkbox-input-label">
              Mostrar somente favoritos
            </label>
            <input id="radioInput" type="checkbox"
              onChange={onBookmarkedChange}
              checked={bookmarkedOnly}
              data-testid="checkbox-input"
            />
          </div>
          <div>
            <label htmlFor="radioInput" data-testid="select-input-label">
              Filtrar por gênero
            </label>
            <select id="radioInput"
            data-testid="select-input"
            onChange={onSelectedGenreChange}
            value={ selectedGenre }>
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </div>
        </form>
      </div>
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
