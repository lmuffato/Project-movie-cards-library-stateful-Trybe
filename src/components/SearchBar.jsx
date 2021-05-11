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

    console.log(bookmarkedOnly);
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
            <input
            data-testid="text-input" value={searchText}
            onChange={onSearchTextChange} type="text"
          />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input" type="checkbox"
            checked={bookmarkedOnly} onChange={onBookmarkedChange}
          />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input" value={selectedGenre}
            onChange={onSelectedGenreChange}
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

SearchBar.defaultProps = {
  searchTex: '',
  onSearchTextChange: undefined,
  bookmarkedOnly: false,
  onBookmarkedChange: undefined,
  selectedGenre: '',
  onSelectedGenreChange: undefined,
};

export default SearchBar;
