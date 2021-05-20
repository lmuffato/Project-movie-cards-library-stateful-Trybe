import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

class MovieList extends React.Component {
  render() {
    const { moviesConst } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {moviesConst.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  moviesConst: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
