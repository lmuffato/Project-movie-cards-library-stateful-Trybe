import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  searchMovies = () => {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.props;

    return movies.filter((movie) => {
      if (searchText.toLowerCase()) {
        return movie.title.toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText);
      }
      if (bookmarkedOnly) {
        return movie.bookmarked;
      }
      if (selectedGenre) {
        return movie.genre === selectedGenre;
      }
      return movies;
    });
    // map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    return (
      <div data-testid="movie-list" className="movie-list">
        {this.searchMovies()
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
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
