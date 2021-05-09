import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
// implement AddMovie component here

class MovieLibrary extends React.Component {
  // this.state = {
  //   searchText: '',
  //   onSearchTextChange: '',
  // bookmarkedOnly: false,
  // onBookmarkedChange: '',
  // selectedGenre: '',
  // onSelectedGenreChange: '',
  // };
  render() {
    const { searchText, onSearchTextChange } = this.props;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
};

export default MovieLibrary;
