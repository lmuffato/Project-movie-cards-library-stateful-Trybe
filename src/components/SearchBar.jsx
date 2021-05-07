import React from 'react';
import PropTypes from 'prop-types';
import GenreInput from './SearchBarComponents/GenreInput';
import BookmarkInput from './SearchBarComponents/BookmarkInput';
import TextInput from './SearchBarComponents/TextInput';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, onBookmarkedChange } = this.props;
    const { bookmarkedOnly, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <TextInput
            searchText={ searchText }
            onSearchTextChange={ onSearchTextChange }
          />
          <br />
          <BookmarkInput
            onBookmarkedChange={ onBookmarkedChange }
            bookmarkedOnly={ bookmarkedOnly }
          />
          <br />
          <GenreInput
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
          />
        </form>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onBookmarkedChange: PropTypes.func,
  onSearchTextChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onBookmarkedChange: PropTypes.func,
  onSearchTextChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
