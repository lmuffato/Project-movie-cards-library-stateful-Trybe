import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      movies,
      searchText: '',
      selectedGenre: '',
      bookmarkedOnly: false,
    };
  }

  filterMovies = (newFilter) => {
    let { state } = this;
    state = { ...state, ...newFilter };
    const { searchText, selectedGenre, bookmarkedOnly } = state;
    let filteredMovies = movies.filter((movie) => (movie.title.includes(searchText)));
    filteredMovies = filteredMovies.filter(
      (movie) => (movie.genre.includes(selectedGenre)),
    );
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked);
    }
    this.setState({ movies: filteredMovies });
  };

  onSearchTextChange = ({ target: { value } }) => {
    this.setState({ searchText: value });
    this.filterMovies({ searchText: value });
  };

  onBookmarkedChange = ({ target: { checked } }) => {
    this.setState({ bookmarkedOnly: checked });
    this.filterMovies({ bookmarkedOnly: checked });
  };

  onSelectedGenreChange = ({ target: { value } }) => {
    this.setState({ selectedGenre: value });
    this.filterMovies({ selectedGenre: value });
  };

  addMovie = (newMovie) => {
    movies.push(newMovie);
    this.filterMovies({});
    console.log(movies);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies: stateMovies } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this;
    const propsSearchBar = {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    };
    return (
      <section>
        <SearchBar { ...propsSearchBar } />
        <MovieList movies={ stateMovies } />
        <AddMovie addMovie={ this.addMovie } />
      </section>
    );
  }
}

export default MovieLibrary;
