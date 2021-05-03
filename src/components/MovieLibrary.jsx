// implement AddMovie component here

import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.oneOfType([propTypes.string, propTypes.number]),
    imagePath: propTypes.string,
  }).isRequired,
};

export default MovieLibrary;
