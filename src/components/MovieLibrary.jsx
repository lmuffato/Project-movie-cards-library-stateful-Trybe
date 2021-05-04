import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor({ movies }) {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.filter = this.filter.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleAddMovie(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
  }

  handleOnChange({ target }) {
    const { id, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({ [id]: value });
  }

  filter() {
    const { movies, selectedGenre, bookmarkedOnly, searchText } = this.state;
    const filterByGender = movies
      .filter((movie) => movie.genre === selectedGenre);

    const filterBySearchText = movies.filter(
      (movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText),
    );

    if (filterByGender.length > 0) return filterByGender;
    if (bookmarkedOnly === true) {
      return movies
        .filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    if (filterBySearchText.length > 0) return filterBySearchText;
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filter();

    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleOnChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleOnChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleOnChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
