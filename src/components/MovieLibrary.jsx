import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(stateName, value) {
    this.setState({ [stateName]: value });
  }

  filterMovies(movies, search, bookmarked, genre) {
    const moviesByGender = movies.filter((movie) => {
      if (genre.length > 0) return movie.genre === genre;
      return movie;
    });

    const moviesBySearchText = moviesByGender.filter((movie) => {
      if (search.length > 0) {
        const searchLowerCase = search.toLowerCase();
        return movie.title.toLowerCase().includes(searchLowerCase)
            || movie.subtitle.toLowerCase().includes(searchLowerCase)
            || movie.storyline.toLowerCase().includes(searchLowerCase);
      }
      return movie;
    });

    const moviesBookmarked = moviesBySearchText.filter((movie) => {
      if (bookmarked === true) return movie.bookmarked;
      return movie;
    });

    return moviesBookmarked;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const moviesFiltered = this
      .filterMovies(movies, searchText, bookmarkedOnly, selectedGenre);
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ moviesFiltered } />
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
