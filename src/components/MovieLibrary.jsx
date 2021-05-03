import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const { movies } = this.props;

const initialStateMovieLib = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
  movies,
};
class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialStateMovieLib;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList />
      </>
    );
  }
}

export default MovieLibrary;
