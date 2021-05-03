import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import CheckBoxInput from './CheckBoxInput';
import SelectInput from './SelectInput';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    const options = [
      { value: '', name: 'Todos' },
      { value: 'action', name: 'Ação' },
      { value: 'comedy', name: 'Comédia' },
      { value: 'thriller', name: 'Suspense' },
    ];

    return (
      <form action="" data-testid="search-bar-form">
        <TextInput
          value={ searchText }
          onChange={ onSearchTextChange }
          label="Inclui o texto:"
          testInputID="text-input"
          testLabelID="text-input-label"
          name="searchInput"
        />
        <CheckBoxInput checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <SelectInput
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          options={ options }
          name="select-input"
          label="Filtrar por gênero"
          selectTestID="select-input"
          labelTestID="select-input-label"
          optionTestID="select-option"
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
