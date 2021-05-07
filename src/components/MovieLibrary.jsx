import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import movies from '../data';

class MovieLibrary extends Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default MovieLibrary;
