import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, bookmarked, genre } = this.props;

    let filteredMovies = movies;
    if (bookmarked) {
      filteredMovies = movies.filter((movie) => movie.bookmarked === true);
    }
    if (genre !== '') {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === genre);
    }
    return (
      <div data-testid="movie-list" className="movie-list">
        { filteredMovies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />)) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  bookmarked: PropTypes.bool.isRequired,
  genre: PropTypes.string.isRequired,
};

export default MovieList;
