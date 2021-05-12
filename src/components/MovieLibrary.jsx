import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '',
      bookMarked: false,
      selecGenre: '',
    };
  }

  render() {
    const { texto, bookMarked, selecGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ texto }
          onSearchTextChange={ (event) => event.target.value }
          bookmarkedOnly={ bookMarked }
          onBookmarkedChange={ (event) => typeof event.target.value }
          selectedGenre={ selecGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie />
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
