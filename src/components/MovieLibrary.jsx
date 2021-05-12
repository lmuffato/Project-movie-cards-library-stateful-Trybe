import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      texto: '',
      bookMarked: false,
      selecGenre: '',
      movieList: movies,
    };
  }

  render() {
    const { texto, bookMarked, selecGenre, movieList } = this.state;
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
        <MovieList movies={ movieList } />
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
