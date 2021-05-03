// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    console.log(bookmarkedOnly,
      selectedGenre, onSelectedGenreChange);
    return (
      <div>
        <div className="searchBar">
          <h1>Busca:</h1>
          <form data-testid="search-bar-form" />
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
        </div>
        <div className="searchBar">
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              onChange={ onBookmarkedChange }
              checked={ bookmarkedOnly }
              data-testid="checkbox-input"
            />
          </label>
        </div>
      </div>
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

export default SearchBar;
