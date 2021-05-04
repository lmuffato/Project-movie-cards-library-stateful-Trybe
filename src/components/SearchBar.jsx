import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: ''
    }
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section data-testid="search-bar-form">
        <div>
          <label data-testid="text-input-label">Inclui o texto:</label>
          <select 
            type="text" 
            data-testid="text-input" 
            label="Inclui o text" 
            value={ searchText }
            onChange={ onSearchTextChange }
            />
        </div>

        <div>
          <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <select 
            type="input" 
            data-testid="checkbox-input" 
            checked={ bookmarkedOnly }
            onChange= { onBookmarkedChange }
            />
        </div>

        <div>
          <label data-testid="select-input-label">Filtrar por gênero</label>
          <select 
            type="select" 
            data-testid="select-input" 
            value={ selectedGenre }
            onChange= { onSelectedGenreChange }>
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
              </select> 

        </div>

      </section>


    );
  }
}

SearchBar.propTypes = {
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.element,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.element,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.element
  };

export default SearchBar;