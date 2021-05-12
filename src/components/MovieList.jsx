import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(Object.entries(movies).map((e) => e[1]));
    return (
      <div data-testid="movie-list" className="movie-list">
        {
          Object.entries(movies).map((movie) => (
            <MovieCard key={ movie[1].title } movie={ movie[1] } />
          ))
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
