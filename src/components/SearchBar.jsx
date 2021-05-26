import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
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
        <label htmlFor="searchInput" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            name="searchInput"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="select-imput-label">
          Mostrar somente favoritos
          <input
            name="select-imput-label"
            type="checkbox"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
          />
        </label>
        <label
          htmlFor="gender"
          data-testid="select-input-label"
        >
          Filtrar por gênero
          <select
            data-testid="select-input"
            name="gender"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>);
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.function,
  bookmarkedOnly: PropTypes.boolean,
  onBookmarkedChange: PropTypes.function,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.function,
}.isRequired;

export default SearchBar;
