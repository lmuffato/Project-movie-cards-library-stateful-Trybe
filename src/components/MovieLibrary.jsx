import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { movies, searchText, selectedGenre, bookmarkedOnly } = this.state;
    console.log(searchText, selectedGenre, bookmarkedOnly);
    return (
      <section>
        <SearchBar />
        <AddMovie />
        { movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />)}
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.objectOf(Object).isRequired,
};

export default MovieLibrary;
