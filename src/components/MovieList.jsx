import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, bookmarked } = this.props;

    let filteredMovies;
    if (bookmarked) {
      filteredMovies = movies.filter((movie) => movie.bookmarked === true);
    } else {
      filteredMovies = movies;
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
};

export default MovieList;
