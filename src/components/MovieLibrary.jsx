import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.State = {

    };
  }

  onSearchTextChange = () => {

  };

  onBookmarkedChange = () => {

  }

  onSelectedGenreChange = () => {

  }

  onClick = () => {

  }

  render() {
    return (
      <section>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
