import React from 'react';
import PropTypes from 'prop-types';
import FormMovie from './FormMovie';

export default class SearchBar extends React.Component {
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
      <FormMovie
        searchText={ searchText }
        onSearchTextChange={ onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ onBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ onSelectedGenreChange }
      />
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
