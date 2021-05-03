// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class SearchBar extends Component {
  render() {
    const { onSearchTextChange, searchText, onBookmarkedChange } = this.props;
    const { bookmarkedOnly, onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <Input
            callback={ onSearchTextChange }
            testidLabel="text-input-label"
            testidInput="text-input"
            labelName="Inclui o texto"
            name="filter"
            value={ searchText }
          />

          <div>
            <label data-testid="checkbox-input-label" htmlFor="favoritos">
              Mostrar somente favoritos
              <input
                data-testid="checkbox-input"
                onChange={ onBookmarkedChange }
                checked={ bookmarkedOnly }
                type="checkbox"
                name="favoritos"
                id="favoritos"
              />
            </label>
          </div>

          <div>
            <label data-testid="select-input-label" htmlFor="">
              Filtrar por gênero
              <select
                data-testid="select-input"
                onChange={ onSelectedGenreChange }
                value={ selectedGenre }
                name=""
                id=""
              >
                <option data-testid="select-option" value="">Todos</option>
                <option data-testid="select-option" value="action">Ação</option>
                <option data-testid="select-option" value="comedy">Comédia</option>
                <option data-testid="select-option" value="thriller">Suspense</option>
              </select>
            </label>
          </div>

        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
