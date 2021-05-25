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
      movies };
  }

  onClick = (addMovie) => {
    this.setState((previusState) => ({
      movies: [...previusState.movies, addMovie],
    }));
  }

  onSearchTextChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.checked });
  };

  handleSelectedGenre = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filterMovies = movies
      .filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(searchText.toLowerCase())
       || subtitle.toLowerCase().includes(searchText.toLowerCase())
        || storyline.toLowerCase().includes(searchText.toLowerCase())));
    const filterMoviesByBookmarked = filterMovies
      .filter(({ bookmarked }) => {
        if (!bookmarkedOnly) {
          return true;
        }
        return bookmarked === true;
      });
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList movies={ filterMoviesByBookmarked } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
