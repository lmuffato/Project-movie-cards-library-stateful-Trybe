import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor({ movies }) {
    super();
    this.filter = this.filter.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleOnChange({ target }) {
    const { id, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({ [id]: value });
  }

  handleAddMovie(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
  }

  filter() {
    const { movies, selectedGenre, bookmarkedOnly, searchText } = this.state;
    const filterByGender = movies
      .filter((movie) => movie.genre === selectedGenre);

    const filterBySearchText = movies.filter(
      (movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText),
    );

    if (filterByGender.length > 0) return filterByGender;
    if (bookmarkedOnly === true) {
      return movies
        .filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    if (filterBySearchText.length > 0) return filterBySearchText;
    return movies;
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={this.props.movies} />
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
