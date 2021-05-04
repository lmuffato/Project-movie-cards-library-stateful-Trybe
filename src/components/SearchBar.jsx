import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, onBookmarkedChange } = this.props;
    const { bookmarkedOnly, selectedGenre, onSelectedGenreChange } = this.props;
    const propsInputText = {
      type: 'text',
      'data-testid': 'text-input',
      value: searchText,
      onChange: onSearchTextChange,
    };
    const propsInputCheckbox = {
      type: 'checkbox',
      'data-testid': 'checkbox-input',
      checked: bookmarkedOnly,
      onChange: onBookmarkedChange,
    };
    const propsInputSelect = {
      'data-testid': 'select-input',
      value: selectedGenre,
      onChange: onSelectedGenreChange,
    };
    const dataTestOption = 'select-option';
    const opts = [
      { name: 'Todos', value: '', 'data-testid': dataTestOption },
      { name: 'Ação', value: 'action', 'data-testid': dataTestOption },
      { name: 'Comédia', value: 'comedy', 'data-testid': dataTestOption },
      { name: 'Suspense', value: 'thriller', 'data-testid': dataTestOption },
    ];
    return (
      <form data-testid="search-bar-form" className="SearchBar">
        <label htmlFor="inputSearch" data-testid="text-input-label">
          Inclui o texto
          <input { ...propsInputText } />
        </label>
        <label htmlFor="inputCheckbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input { ...propsInputCheckbox } />
        </label>
        <label htmlFor="inputSelect" data-testid="select-input-label">
          Filtrar por gênero
          <select { ...propsInputSelect }>
            {opts.map((opt, i) => <option { ...opt } key={ i }>{opt.name}</option>)}
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
