import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import InputCheckbox from './InputCheckbox';
import InputSelect from './InputSelect';
import '../css/SearchBar.css';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <div>
        <form className="form" data-testid="search-bar-form">
          <Input
            inputType="text"
            datatestidLabel="text-input-label"
            textLabel="Inclui o texto:"
            onSearchTextChange={ onSearchTextChange }
            searchText={ searchText }
            datatestid="text-input"
          />
          <InputCheckbox
            datatestidLabel="checkbox-input-label"
            textLabel="Mostrar somente favoritos"
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ onBookmarkedChange }
            datatestid="checkbox-input"
          />
          <InputSelect
            datatestidLabel="select-input-label"
            textLabel="Filtrar por gênero"
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
            datatestid="select-input"
            datatestidOption="select-option"
          />
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
