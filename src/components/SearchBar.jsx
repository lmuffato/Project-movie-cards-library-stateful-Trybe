import React from 'react';
import PropTypes from 'prop-types';

import './styles/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div className="searchBar">
        <form data-testid="search-bar-form" />
      </div>
    );
  }
}

SearchBar.propTypes = PropTypes.shape({
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
});

export default SearchBar;
