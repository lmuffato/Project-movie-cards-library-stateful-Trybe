// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              value={ searchText }
              data-testid="text-input"
              onChange={ onSearchTextChange }
            />
          </label>
          <label
            data-testid="checkbox-input-label"
            htmlFor="checkbox-input"
          >
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label
            data-testid="select-input-label"
            htmlFor="select-input"
          >
            Filtrar por gênero
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
      </section>
    );
  }
}
SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: false,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
export default SearchBar;
