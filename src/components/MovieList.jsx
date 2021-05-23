import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  filterList = (movies) => {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    let filteredMovies;
    if (bookmarkedOnly) {
      filteredMovies = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      filteredMovies = movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      filteredMovies = movies.filter((movie) => movie.title.includes(searchText));
    }
    if (filteredMovies === undefined) {
      filteredMovies = movies;
    }
    return filteredMovies;
  }

  render() {
    let { movies } = this.props;
    movies = this.filterList(movies);
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieList;
