import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form>
        <label htmlFor="textSearch">
          Inclui o texto
          <br />
          <input
            type="text"
            name="textSearch"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <br />
        <label htmlFor="favorite">
          <input
            type="checkbox"
            name="favorite"
            value={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <br />
        <label htmlFor="textSearch">
          Filtrar por gênero
          <br />
          <input
            type="text"
            name="textSearch"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          />
        </label>
        <br />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
