// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">

        <label htmlFor="text-in" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="text-in"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            type="text"
          />
        </label>
        <label htmlFor="checkbox-in" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="checkbox-in"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            type="checkbox"
          />
        </label>
        <p>{ onSearchTextChange }</p>
        <p>{ bookmarkedOnly }</p>
        <p>{ onBookmarkedChange }</p>
        <p>{ selectedGenre }</p>
        <p>{ onSelectedGenreChange }</p>
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

export default SearchBar;
