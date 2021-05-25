import React from 'react';
import { string, func, bool } from 'prop-types';

class Searchbar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form
        data-testid="search-bar-form"
        action=""
      >
        <label
          data-testid="text-input-label"
          htmlFor="text-name"
        >
          Inclui o texto:
          <input
            id="text-name"
            onChange={ onSearchTextChange }
            data-testid="text-input"
            type="text"
            value={ searchText }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: string,
  onSearchTextChange: func,
  bookmarkedOnly: bool,
  onBookmarkedChange: func,
  selectedGenre: string,
  onSelectedGenreChange: func,
}.isRequired;

export default Searchbar;
