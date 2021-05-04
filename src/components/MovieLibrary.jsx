// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props,
    }
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange={ console.log }
          bookmarkedOnly={ false }
          onBookmarkedChange={ console.log }
          selectedGenre=""
          onSelectedGenreChange={ console.log }
        />
       {movies.map((movie) => <MovieCard movie={ movie } />)} 
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(),
};

export default MovieLibrary;
