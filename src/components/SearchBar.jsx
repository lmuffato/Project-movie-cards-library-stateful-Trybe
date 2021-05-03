// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from './SearchBarComponents/TextInput';

const moviesGenre = {
  Todos: '',
  Ação: 'action',
  Comédia: 'comedy',
  Suspense: 'thriller',
};

const moviesGenreValues = Object.values(moviesGenre).map((type) => type);

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <TextInput onSearchTextChange={ onSearchTextChange } value={ searchText } />
          <div>
            <label htmlFor="radioInput" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                id="radioInput"
                type="checkbox"
                onChange={ onBookmarkedChange }
                checked={ bookmarkedOnly }
                data-testid="checkbox-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="radioInput" data-testid="select-input-label">
              Filtrar por gênero
              <select
                id="radioInput"
                data-testid="select-input"
                onChange={ onSelectedGenreChange }
                value={ selectedGenre }
              >
                { Object.keys(moviesGenre)
                  .map((type, index) => (
                    <option
                      key={ index }
                      value={ moviesGenreValues[index] }
                      data-testid="select-option"
                    >
                      { type }
                    </option>
                  ))}
              </select>
            </label>
          </div>
        </form>
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
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: undefined,
  bookmarkedOnly: false,
  onBookmarkedChange: undefined,
  selectedGenre: '',
  onSelectedGenreChange: undefined,
};

export default SearchBar;
