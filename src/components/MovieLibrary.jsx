import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => `${movie.title} - ${movie.subtitle}`)}
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
