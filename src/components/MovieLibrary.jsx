// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

// Codado via pair programming com Vinicius Rodrigues
class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.funcFilteredBookmarked = this.funcFilteredBookmarked.bind(this);
    this.funcFilteredGenre = this.funcFilteredGenre.bind(this);
    this.funcFilteredText = this.funcFilteredText.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  funcFilteredBookmarked(movies) {
    const { bookmarkedOnly } = this.state;
    return (bookmarkedOnly ? movies
      .filter((movie) => (movie.bookmarked === true)) : movies);
  }

  funcFilteredGenre(movies) {
    const { selectedGenre } = this.state;
    return (selectedGenre === '' ? movies
      : movies.filter((movie) => (movie.genre === selectedGenre)));
  }

  funcFilteredText(movies) {
    const { searchText } = this.state;
    return movies.filter(({ title, subtitle, storyline }) => title.includes(searchText)
    || subtitle.includes(searchText)
    || storyline.includes(searchText));
  }

  addMovie(newMovie) {
    const { movies: arrayOfMovie } = this.state;
    this.setState({
      movies: [...arrayOfMovie, newMovie],
    });
  }

  render() {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    let { movies } = this.state;

    if (bookmarkedOnly) movies = this.funcFilteredBookmarked(movies);
    if (selectedGenre) movies = this.funcFilteredGenre(movies);
    if (searchText) movies = this.funcFilteredText(movies);
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
        <AddMovie onClick={ this.addMovie } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
