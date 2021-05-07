// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    const { bookmarkedOnly, onBookmarkedChange, selectedGenre } = this.props;
    const { onSelectedGenreChange } = this.props;
    return (
      <div className="search-bar">
        <form className="search-bar-form" data-testid="search-bar-form">
          <label htmlFor="Inclui o texto:" data-testid="text-input-label">
            Inclui o texto:
            <input
              className="search-bar-input"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
              type="text"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="Mostrar somente favoritos">
            Mostrar somente favoritos
            <input
              className="search-bar-input"
              data-testid="checkbox-input"
              onChange={ onBookmarkedChange }
              type="checkbox"
              checked={ bookmarkedOnly }
            />
          </label>
          <label
            className="search-bar-input"
            data-testid="select-input-label"
            htmlFor="Filtrar por gênero"
          >
            Filtrar por gênero
            <select
              className="search-bar-input"
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
              value={ selectedGenre }

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
