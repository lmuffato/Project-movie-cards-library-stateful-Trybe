import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      filteredMovies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.filteredBookmarked = this.filteredBookmarked.bind(this);
    this.filteredGenre = this.filteredGenre.bind(this);
    this.filteredSearchText = this.filteredSearchText.bind(this);
  }

  onSearchTextChange({ target: { value } }) {
    this.setState({
      searchText: value,
    }, this.filteredSearchText);
  }

  onBookmarkedChange({ target: { checked } }) {
    this.setState({
      bookmarkedOnly: checked,
    }, this.filteredBookmarked);
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({
      selectedGenre: value,
    }, this.filteredGenre);
  }

  addMovie({ title, subtitle, storyline, rating, imagePath, genre }) {
    const newMovie = {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    };
    this.setState((oldState) => ({ filteredMovies: [...oldState.movies, newMovie] }));
  }

  filteredBookmarked() {
    const { bookmarkedOnly, movies } = this.state;
    const filteredMovies = movies.filter((value) => value.bookmarked === bookmarkedOnly);
    console.log(filteredMovies);
    this.setState({
      filteredMovies,
    });
  }

  filteredGenre() {
    const { selectedGenre, movies } = this.state;
    const filteredMovies = movies.filter((value) => (selectedGenre === ''
      ? true : value.genre === selectedGenre));
    this.setState({
      filteredMovies,
    });
  }

  filteredSearchText() {
    const { searchText, movies } = this.state;
    const filteredMovies = movies.filter((value) => value.title.includes(searchText)
      || value.subtitle.includes(searchText)
      || value.storyline.includes(searchText));
    this.setState({
      filteredMovies,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, filteredMovies } = this.state;
    const propsSearchBar = {
      searchText,
      onSearchTextChange: this.onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange: this.onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange: this.onSelectedGenreChange,
      // filterMovies: this.filteredMovies,
    };

    return (
      <div>
        <SearchBar { ...propsSearchBar } />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.addMovie } />
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
