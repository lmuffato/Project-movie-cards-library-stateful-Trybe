import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    const { movies } = this.props;
    this.setState({ movies });
  }

  submitNewMovie = (movie) => {
    const { movies } = this.state;
    movies.push(movie);
    this.setState({ movies });
  }

  onBookmarkedChange = (e) => {
    let { bookmarkedOnly } = this.state;
    bookmarkedOnly = e.target.checked;
    this.setState({ bookmarkedOnly });
  }

  onSearchTextChange = (e) => {
    const text = e.target.value;
    this.setState({ searchText: text });
  }

  onSelectedGenreChange = (e) => {
    const selectedGenre = e.target.value;
    this.setState({ selectedGenre });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          searchText={ searchText }
        />
        <AddMovie submitNewMovie={ this.submitNewMovie } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
