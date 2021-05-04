import React from 'react';

import { string, func, bool } from 'prop-types';

import { kindOfMovies, inputs, typesSearchBar } from '../libs/data';

import Option from './Option';
import Label from './Label';

function SearchBar(props) {
  const { selectedGenre, onSelectedGenreChange } = props;
  const elementsSearchBar = Object.keys(inputs.SearchBar);

  return (
    <form data-testid="search-bar-form">
      {elementsSearchBar.map((element) => {
        const { label, input, propsInfo } = inputs.SearchBar[element];
        const attribute = { [typesSearchBar[input.type]]: props[propsInfo.state] };
        return (
          <Label
            key={ input.name }
            labelInfo={ label }
            inputMainInfo={ { onChange: props[propsInfo.onChange], ...attribute } }
            inputExtraInfo={ input }
          />
        );
      })}

      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          {kindOfMovies.map((kindOfMovie) => (
            <Option
              key={ kindOfMovie.id }
              movie={ kindOfMovie }
              dataId="select-option"
            />
          ))}
        </select>
      </label>
    </form>
  );
}

SearchBar.propTypes = {
  searchText: string.isRequired,
  onSearchTextChange: func.isRequired,
  bookmarkedOnly: bool.isRequired,
  onBookmarkedChange: func.isRequired,
  selectedGenre: string.isRequired,
  onSelectedGenreChange: func.isRequired,
};

export default SearchBar;

// References
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/label

{/* <Label
        labelInfo={ inputCheckbox.label }
        inputMainInfo={ { onChange: onBookmarkedChange, checked: bookmarkedOnly } }
        inputExtraInfo={ inputCheckbox.input }
      />

      <Label
        labelInfo={ inputText.label }
        inputMainInfo={ { onChange: onSearchTextChange, value: searchText } }
        inputExtraInfo={ inputText.input }
      /> */}
