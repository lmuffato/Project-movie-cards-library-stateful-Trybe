import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
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
  ),
};

MovieLibrary.defaultProps = {
  movies: 'undefined',
};

export default MovieLibrary;
