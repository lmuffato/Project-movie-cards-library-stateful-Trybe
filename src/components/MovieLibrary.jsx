import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar />
        {/* <MovieList movies={this.props.movies} /> */}
        <AddMovie handleMovieButton={ this.handleMovieButton } />
      </div>
    );
  }
}

export default MovieLibrary;
