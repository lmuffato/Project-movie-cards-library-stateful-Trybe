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
      <div className="search-bar">
        <form data-testid="search-bar-form">
          <label htmlFor="search-input" data-testid="text-input-label">
            Inclui o texto:
            <input id="search-input" type="text" value="" />
          </label>
        </form>
      </div>
    );
  }
}

// SearchBar.prototype = {
//   searchText: PropTypes.string,
// };

export default SearchBar;
