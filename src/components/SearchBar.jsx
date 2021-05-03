import React from 'react';

import PropTypes from 'prop-types';

import { kindOfMovies, inputs } from '../libs/searchBarData';

import Option from './Option';
import Label from './Label';

function SearchBar(props) {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange,
  } = props;

  const { inputCheckbox, inputText } = inputs;

  return (
    <form data-testid="search-bar-form">
      <Label
        labelInfo={ inputCheckbox.label }
        inputMainInfo={ { onChange: onBookmarkedChange, checked: bookmarkedOnly } }
        inputExtraInfo={ inputCheckbox.input }
      />

      <Label
        labelInfo={ inputText.label }
        inputMainInfo={ { onChange: onSearchTextChange, value: searchText } }
        inputExtraInfo={ inputText.input }
      />

      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          {kindOfMovies.map((kindOfMovie) => (
            <Option key={ kindOfMovie.id } movie={ kindOfMovie } />
          ))}
        </select>
      </label>
    </form>
  );
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

// References
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/label
