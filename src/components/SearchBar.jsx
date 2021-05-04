// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
// onSelectedGenreChange

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, onSearchTextChange, onBookMarkedChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label
            data-testid="text-input-label"
            htmlFor="search-input"
          >
            Inclui o texto:
            <input
              id="search-input"
              type="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>

          <label
            htmlFor="favorit"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              id="favorit"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              type="checkbox"
              onChange={ onBookMarkedChange }
            />
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  onBookmarkedChange: PropTypes.func,

}

export default SearchBar;
