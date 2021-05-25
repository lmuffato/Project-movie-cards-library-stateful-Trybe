import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { moviesMly } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: moviesMly };
  }

  onSearchTextChange = ({ target }) => {
    this.setState({ searchText: target.value });
  };

  onBookmarkedChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ bookmarkedOnly: value });
  };

  onSelectedGenreChange = ({ target }) => {
    this.setState({ selectedGenre: target.value });
  };

  onClick = (addMovie) => {
    this.setState((previusState) => ({
      movies: [...previusState.movies, addMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;
    const filterMoviesByBookmarked = movies.filter((movie) => movie.bookmarked === true);
    const filterMoviesByGenre = movies.filter((movie) => movie.genre === selectedGenre);

    const filterMoviesByText = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));

    if (searchText) {
      movies = filterMoviesByText;
    }
    if (bookmarkedOnly) {
      movies = filterMoviesByBookmarked;
    }
    if (selectedGenre) {
      movies = filterMoviesByGenre;
    }

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
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
