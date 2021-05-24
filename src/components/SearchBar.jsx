// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    /* const onSearchTextChange =  */
    return (
      <form data-testid="search-bar-form">

        <div>
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              onChange={ onSearchTextChange }
              type="text"
              value={ searchText }
              id="text"
            />
          </label>
        </div>
        <div>
          <label htmlFor="checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos:
            <input
              data-testid="checkbox-input"
              onChange={ onBookmarkedChange }
              type="checkbox"
              checked={ bookmarkedOnly }
              id="checkbox"
            />
          </label>
        </div>
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero:
          <select
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: true,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: '',
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
