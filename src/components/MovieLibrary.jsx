// implement AddMovie component here
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
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      mov: movies,
    };
  }

  addMovie = (obj) => {
    this.setState((initialState) => ({ mov: [...initialState.mov, obj] }));
  }

  onSearchTextChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  filterMoviesByText = (array) => {
    const { searchText } = this.state;
    return array
      .filter(({ title, subtitle, storyline }) => title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText));
  }

  filterMoviesByGenre = (array) => {
    const { selectedGenre } = this.state;
    return array.filter((movie) => movie.genre === selectedGenre);
  }

  filterMoviesByBook = (array) => {
    const { bookmarkedOnly } = this.state;
    return array.filter((movie) => movie.bookmarked === bookmarkedOnly);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { mov } = this.state;
    let filteredMovies = mov;
    if (searchText) filteredMovies = this.filterMoviesByText(filteredMovies);
    if (bookmarkedOnly) filteredMovies = this.filterMoviesByBook(filteredMovies);
    if (selectedGenre) filteredMovies = this.filterMoviesByGenre(filteredMovies);
    mov = filteredMovies;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ mov } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
