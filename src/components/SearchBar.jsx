// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onSearchTextChange, bookmarkedOnly, searchText,
      onBookmarkedChange, onSelectedGenreChange, selectedGenre,
    } = this.props;
    return (
      <div>
        <form className="search-bar-form" data-testid="search-bar-form">
          <h4>Faça seu filtro</h4>
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              id="text-input"
              data-testid="text-input"
              name="searchText"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={ bookmarkedOnly }
              id="checkbox-input"
              name="checkbox"
              value="bookmarkedOnly"
              data-testid="checkbox-input"
              onChange={ onBookmarkedChange }
            />
          </label>
          <label htmlFor="select-input" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="select-input"
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
