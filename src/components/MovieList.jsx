import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, bookmarkedOnly } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie, i) => (
          <MovieCard
            key={ i }
            movie={ movie }
            bookmarkedOnly={ bookmarkedOnly }
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

export default MovieList;
