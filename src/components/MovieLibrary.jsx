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
    this.getBookmarkedMovies = this.getBookmarkedMovies.bind(this);

    const { movies } = this.props;
    this.state = {
      // searchText: '',
      bookmarkedOnly: false,
      // selectedGenre: '',
      movies,
    };
  }

  onClick(addMovieState) {
    this.setState((prevState) => ({ movies: [...prevState.movies, addMovieState] }));
  }

  onBookmarkedChange(e) {
    this.setState({ bookmarkedOnly: e.target.checked });
  }

  getBookmarkedMovies(movies) {
    if (this.state.bookmarkedOnly) {
      return movies.filter(movie => movie.bookmarked === true);
    }

    return movies;
  }

  render() {
    const { movies } = this.state;
    const filteredMovies = this.getBookmarkedMovies(movies);

    return (
      <div>
        <SearchBar onBookmarkedChange={ this.onBookmarkedChange } />
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
