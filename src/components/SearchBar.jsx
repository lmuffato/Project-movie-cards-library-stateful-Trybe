import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // const {
    //   // searchText,
    //   // onSearchTextChange,
    //   // bookmarkedOnly,
    //   // onBookmarkedChange,
    //   // selectedGenre,
    //   // onSelectedGenreChange,
    // } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <div className="input-group">
            <label htmlFor="search-input" data-testid="text-input-label">
              Inclui o texto:
              <input
                id="search-input"
                type="text"
                value="searchText"
                onChange="onSearchTextChange"
                data-testid="text-input"
              />
            </label>
          </div>

          <div className="input-group">
            <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                id="checkbox-input"
                type="checbox"
                onChange="onBookmarkedChange"
                data-testid="checkbox-input"
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

// SearchBar.prototype = {
//   searchText: PropTypes.string,
// };

export default SearchBar;
