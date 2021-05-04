import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import genders from './movieTypes';
import Check from './checkbox';

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
      <form data-testid="search-bar-form">
        <Input
          tipo="text"
          texto="Inclui o texto:"
          nome="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          labelData="text-input-label"
          inputData="text-input"
        />
        <Check
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          texto="Mostrar somente favoritos"
          nome="bookmarkedOnly"
        />
        <label
          data-testid="select-input-label"
          htmlFor="genero"
        >
          Filtrar por gênero
          <select
            name="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            {genders.map((gender, index) => (
              <option
                key={ index }
                data-testid="select-option"
                value={ gender.valor }
                name={ gender.valor }
              >
                {gender.name}
              </option>))}
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
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
