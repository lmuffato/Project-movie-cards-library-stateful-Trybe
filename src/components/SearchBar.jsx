import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <form
        data-testid="search-bar-form"
        className="form-search-bar"
      >
        <label data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto
          <input
            data-testid="text-input"
            id="searchText"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        <br />
        <label data-testid="checkbox-input-label" htmlFor="searchCheckbox">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="searchCheckbox"
            type="checkBox"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-ele">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="select-input"
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

// observe os padrões dos requesitos 2 a 4 e o req 5
// para tentar fazer compounds

export default SearchBar;
