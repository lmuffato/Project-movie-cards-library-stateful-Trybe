import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '' };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSelectedGenreChange, onBookmarkedChange, onSearchTextChange } = this.props;
    return (
      <section data-testid="search-bar-form">
        <div>
          <label data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              data-testid="text-input"
              label="Inclui o text"
              value={ searchText }
              onChange={ onSearchTextChange }
           />
          </label>
        </div>
        <div>
          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="input"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </div>
        <div>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select type="select"
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </div>
      </section>
    );
  }
}

// SearchBar.propTypes = {
//   searchText: PropTypes.string,
//   onSearchTextChange: PropTypes.element,
//   bookmarkedOnly: PropTypes.bool,
//   onBookmarkedChange: PropTypes.element,
//   selectedGenre: PropTypes.string,
//   onSelectedGenreChange: PropTypes.element
//   };

export default SearchBar;
