import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookMarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form action="" data-testid="search-bar-form">
        <label
          htmlFor="text"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            name="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>

        <label htmlFor="bookMarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookMarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookMarkedChange }
            data-testid="checkbox-input"
          />
        </label>

        <label htmlFor="genre">
          Filtrar por gênero
          <select name="genre" value={ selectedGenre } onChange={ onSelectedGenreChange }>
            <option value="">Todos e "</option>
            <option value="">Ação e action</option>
            <option value="">Comédia e comedy</option>
            <option value="">Suspense e thriller</option>
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
  onBookMarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
