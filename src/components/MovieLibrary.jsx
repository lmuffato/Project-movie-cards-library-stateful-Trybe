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
      movies: moviesMly };
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

  render() {
    const { movies, searchText, bookmarkedOnly } = this.state;
    const filterMovies = movies
      .filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase()));
    console.log(filterMovies);
    const filterMoviesByBookmarked = filterMovies
      .filter(({ bookmarked }) => {
        if (!bookmarkedOnly) {
          return true;
        }
        return bookmarked === true;
      });
    console.log(filterMoviesByBookmarked);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
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
