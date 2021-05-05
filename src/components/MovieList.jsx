import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.props;
    let renderedMovies = movies;

    renderedMovies = renderedMovies.filter((movie) => {
      const { title, subtitle, storyline } = movie;
      if (title.includes(searchText)) return movie;
      if (subtitle.includes(searchText)) return movie;
      if (storyline.includes(searchText)) return movie;
      return null;
    });
    if (bookmarkedOnly) {
      renderedMovies = renderedMovies.filter((movie) => movie.bookmarked === true);
    }
    renderedMovies = renderedMovies.filter((movie) => movie.genre.includes(
      selectedGenre,
    ));

    return (
      <div data-testid="movie-list" className="movie-list">
        { renderedMovies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
        />)) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
};

MovieList.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

export default MovieList;
