import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.filter = this.filtered.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
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

  filtered() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filteredMovies = movies;

    if (searchText !== '') {
      filteredMovies = filteredMovies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    }

    if (bookmarkedOnly === true) {
      filteredMovies = filteredMovies
        .filter((movie) => movie.bookmarked === bookmarkedOnly);
    }

    if (selectedGenre !== '') {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    return filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filter();

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleOnChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleOnChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleOnChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleAddMovie } />
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
