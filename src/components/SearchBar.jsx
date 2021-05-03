import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText } = this.props;
    const { onSearchTextChange } = this.props;
    // const { bookmarkedOnly } = this.props;
    // const { onBookmarkedChange } = this.props;
    // const { selectedGenre } = this.props;
    // const { onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="srch-input" data-testid="tet-input-label">
          Inclui o texto:
          <input
            id="srch-input"
            type="text"
            onChange={ onSearchTextChange }
            value={ searchText }
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
  // onBookmarkedChange: PropTypes.func.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.func.isRequired,
};
export default SearchBar;
