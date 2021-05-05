import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Check from './checkbox';
import Select2 from './Select2';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form" className="form searchBar">
        <Input
          tipo="text"
          texto="Inclui o texto:"
          nome="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          labelData="text-input-label"
          inputData="text-input"
        />
        <Select2
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <Check
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          texto="Mostrar somente favoritos "
          nome="bookmarkedOnly"
        />
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
