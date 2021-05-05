// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, searchText, bookmarkedOnly, onBookmarkedChange,
      onSelectedGenreChange, selectedGenre } = this.props;
    console.log('Entrei na classe SearchBar');
    return (
      <form className="form-filter" data-testid="search-bar-form">
        <label htmlFor="label-text" data-testid="text-input-label">
          Inclui o texto
          <input
            id="label-text"
            value={ searchText }
            type="text"
            data-testid="text-input"
            onChange={ onSearchTextChange }
            className="form-control"
          />
        </label>
        <label htmlFor="label-checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="label-checkbox"
            type="checkbox"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            className="form-control"
          />
        </label>
        <label htmlFor="label-select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="label-select"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
            data-testid="select-input"
            className="form-control"
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
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
}.isRequerid;

SearchBar.defaulProps = {
  searchText: '',
  bookmarkedOnly: null,
  selectedGenre: '',
  onSearchTextChange: null,
  onBookmarkedChange: null,
  onSelectedGenreChange: null,
};

export default SearchBar;
