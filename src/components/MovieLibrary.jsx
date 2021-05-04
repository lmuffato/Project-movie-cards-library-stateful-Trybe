import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.currentlyState = this.currentlyState.bind(this);
  }

  onClick() {
    return '';
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: arrayOf(shape({
    title: string.isRequired,
    subtitle: string.isRequired,
    storyline: string.isRequired,
    rating: number.isRequired,
    imagePath: string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
