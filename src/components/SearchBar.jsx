import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(stateName, callback, e) {
    const { props } = this;
    const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
    props[callback](stateName, value);
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.props;

    return (
      <form action="#" data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto
          <input
            id="searchText"
            type="text"
            value={ searchText }
            onChange={ this.handleChange.bind(this, 'searchText', 'onSearchTextChange') }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={
              this.handleChange.bind(this, 'bookmarkedOnly', 'onBookmarkedChange')
            }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="select-input"
            value={ selectedGenre }
            onChange={
              this.handleChange.bind(this, 'selectedGenre', 'onSelectedGenreChange')
            }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
