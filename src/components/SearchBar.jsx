// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <fieldset>
            <label htmlFor="labeIncluiOTexto" data-testid="text-input-label">
              Inclui o texto:
              <input
                value={ searchText }
                name="bookmarkedOnly"
                type="text"
                onChange={ onSearchTextChange }
                data-testid="text-input"
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="labelMostrarFavoritos" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                type="checkbox"
                data-testid="checkbox-input"
                checked={ bookmarkedOnly }
                onChange={ onBookmarkedChange }
              />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = PropTypes.shape({
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}).isRequired;

export default SearchBar;
