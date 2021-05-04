// implement AddMovie component here
import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'Console.log()',
    };
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          SearchText={ input }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
