// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

// const searchProps = {
//   searchText,
//   onSearchTextChange,
//   bookmarkedOnly,
//   onBookmarkedChange,
//   selectedGenre,
//   onSelectedGenreChange,

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <div>
        <forms data-testid="search-bar-form">
          <label htmlFor="Inclui o texto" data-testid="text-input-label">
            Inclui o texto
            <input
              id="Inclui o texto"
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="Mostrar somente favoritos" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="Mostrar somente favoritos"
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </forms>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.func.isRequired,
};
// Esse componente renderizará uma barra com filtros acima da listagem de cartões.
// Quais cartões serão mostrados no componente <MovieList /> dependerá dos filtros escolhidos.
// <SearchBar /> deve receber como props:

// searchText, uma string
// onSearchTextChange, uma callback
// bookmarkedOnly, um boolean
// onBookmarkedChange, uma callback
// selectedGenre, uma string
// onSelectedGenreChange, uma callback

export default SearchBar;
