import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
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

  onBookmarkedChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSearchTextChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  onSelectedGenreChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filterMovies = movies.filter(({ title, subtitle, storyline }) => (
      title.toLowerCase().includes(searchText.toLowerCase())
      || subtitle.toLowerCase().includes(searchText.toLowerCase())
      || storyline.toLowerCase().includes(searchText.toLowerCase())
    ));
    const filterMoviesByBookmarked = filterMovies.filter(({ bookmarked }) => {
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
          selectedGenre={ selectedGenre }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filterMoviesByBookmarked } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
