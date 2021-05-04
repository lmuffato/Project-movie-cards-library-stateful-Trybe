import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form" action="">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto
            <input
              onChange={ onSearchTextChange }
              id="text-input"
              type="text"
              data-testid="text-input"
              value={ searchText }
            />
          </label>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              data-testid="checkbox-input"
              id="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <label htmlFor="selectInput" data-testid="select-input-label">
            Filtrar por gênero
            <select name="" id="selectInput" data-testid="select-input">
              
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
