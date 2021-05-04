import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   searchText: '',
  //   //   bookmarkedOnly: false,
  //   //   selectedGenre: '',
  //   //   movies: '',
  //   // };
  // }

  render() {
    const { movies } = this.props;

    return (
      <div>
        <SearchBar />

        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
