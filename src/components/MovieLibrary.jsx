import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  addMovie = (newMovie) => {
    this.setState((lastState) => ({ movies: [...lastState.movies, newMovie] }));
  }

  searchMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let currentFilter = movies;

    if (bookmarkedOnly) {
      return currentFilter.filter(({ bookmarked }) => bookmarked === true);
    }

    if (selectedGenre !== '') {
      return currentFilter.filter(({ genre }) => genre === selectedGenre);
    }

    if (searchText !== '') {
      const textToLowerCase = searchText.toLowerCase();
      currentFilter = movies.filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(textToLowerCase)
        || subtitle.toLowerCase().includes(textToLowerCase)
        || storyline.toLowerCase().includes(textToLowerCase)
      ));
    }

    return currentFilter;
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ this.searchMovies() } />
        <AddMovie onClick={ (newMovie) => this.addMovie(newMovie) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
