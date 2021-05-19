import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  searchMovies = () => {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.props;
    let moviesFilter = movies;

    if (bookmarkedOnly === true) {
      moviesFilter = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      moviesFilter = movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText.length > 0) {
      moviesFilter = movies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    }
    return moviesFilter.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    return (
      <div data-testid="movie-list" className="movie-list">
        {this.searchMovies()}
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
