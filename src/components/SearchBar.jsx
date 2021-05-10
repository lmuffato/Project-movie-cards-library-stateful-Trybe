import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <br />
          <input
            id="text-input"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label htmlFor="checked" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <br />
          <input
            id="checked"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <br />

        <label htmlFor="SelectGender" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="SelectGender"
            data-testid="select-input"
            value={ selectedGenre }
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

SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.string,
  onBookmarkedChange: PropTypes.func,
  onSearchTextChange: PropTypes.bool,
  onSelectedGenreChange: PropTypes.func,
  searchText: PropTypes.string,
  selectedGenre: PropTypes.func,
}.isRequired;

export default SearchBar;
