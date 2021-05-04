// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="checkbox-input-label" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  // searchText: PropTypes.string.isRequired,
  // onSearchTextChange: PropTypes.string.isRequired,
// //   bookmarkedOnly: PropTypes.string,
// //   onBookmarkedChange: PropTypes.string,
// //   selectedGenre: PropTypes.string,
// //   onSelectedGenreChange: PropTypes.string,
};

// SearchBar.defaultProps = {
// searchText: '',
// onSearchTextChange: [],
// //   bookmarkedOnly: '',
// //   onBookmarkedChange: '',
// //   selectedGenre: '',
// //   onSelectedGenreChange: '',
// };

export default SearchBar;
