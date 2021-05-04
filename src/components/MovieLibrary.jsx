import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      genre: '',
      movies,
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.handleGenderInput = this.handleGenderInput.bind(this);
    this.filter = this.filter.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleSearchInput(e) {
    const { value } = e.target;
    this.setState({ searchText: value });
  }

  handleGenderInput(e) {
    const { value } = e.target;
    this.setState({ genre: value });
  }

  addMovie({ subtitle, title, imagePath, storyline, rating, genre }) {
    const movie = { title, subtitle, imagePath, storyline, rating, genre };
    const { movies } = this.state;

    this.setState({
      movies: movies.concat(movie),
    });
  }

  toggleBookmark() {
    const { bookmarkedOnly } = this.state;

    if (bookmarkedOnly) {
      this.setState({ bookmarkedOnly: false });
      return;
    }

    this.setState({ bookmarkedOnly: true });
  }

  // Li o código do Anderson para fazer essa função
  // https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/pull/75/files
  filter() {
    const { movies, searchText, bookmarkedOnly, genre } = this.state;
    let filteredMovies = movies;

    if (searchText.length > 1) {
      filteredMovies = filteredMovies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    }

    if (bookmarkedOnly === true) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }

    if (genre.length > 1) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === genre);
    }

    return filteredMovies;
  }

  render() {
    const { searchText, genre, bookmarkedOnly } = this.state;

    const movies = this.filter();

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchInput }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.toggleBookmark }
          selectedGenre={ genre }
          onSelectedGenreChange={ this.handleGenderInput }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
