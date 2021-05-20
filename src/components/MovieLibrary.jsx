import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

export default class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange=""
          bookmarkedOnly=""
          onBookmarkedChange=""
          selectedGenre=""
          onSelectedGenreChange=""
        />
        <MovieList moviesConst={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
