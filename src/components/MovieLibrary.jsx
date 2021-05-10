import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick(addMovieState) {
    this.setState((prevState) => ({ movies: [...prevState.movies, addMovieState] }));
  }

  onBookmarkedChange(e) {
    this.setState({ bookmarkedOnly: e.target.checked });
  }

  onSelectedGenreChange(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  getBookmarkedMovies(movies) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }

    return movies;
  }

  getMoviesByGenre(movies) {
    const { selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }

    return movies;
  }

  getMoviesBySearchText(movies) {
    const { searchText } = this.state;
    if (searchText) {
      return movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }

    return movies;
  }

  render() {
    const { movies } = this.state;
    const filteredMovies = this.getMoviesBySearchText(movies);

    return (
      <div>
        <SearchBar
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          onSearchTextChange={ this.onSearchTextChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.onClick } />
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
