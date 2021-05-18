import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  handleOnClick = (event) => {
    console.log(event);
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <AddMovie onClick={ this.handleOnClick } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
