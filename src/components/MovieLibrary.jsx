import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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

  onBookmarkedChange = (event) => {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectedGenreChange = (event) => {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  onSearchTextChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  funcFilteredBookmarked = (movies) => (bookmarkedOnly ? movies
    .filter((movie) => (movie.bookmarked === true)) : movies)

  funcFilteredGenre = (movies) => (selectedGenre === '' ? movies
    : movies.filter((movie) => (movie.genre === selectedGenre))
  )

  funcFilteredText = (movies) => (
    searchText === '' ? movies
      : (movies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText)))
      ))

  render() {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    let { movies } = this.state;

    if (bookmarkedOnly) movies = this.funcFilteredBookmarked;
    if (selectedGenre) movies = this.funcFilteredGenre;
    if (searchText) movies = this.funcFilteredText;

    return (
      <div>
        <SearchBar
          onBookmarkedChange={ this.onBookmarkedChange }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
        />
        <AddMovie />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
