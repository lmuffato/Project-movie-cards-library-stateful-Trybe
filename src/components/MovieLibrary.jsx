// implement AddMovie component here

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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
  }

  handleSearchChange = ({ target }) => {
    this.setState({
      searchText: target.value,
    });
  }

  handleBookChange = ({ target }) => {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  handleGenreChange = ({ target }) => {
    this.setState({
      selectedGenre: target.value,
    });
  }

  filterMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre) return movies.filter((movie) => movie.genre === selectedGenre);

    if (searchText) {
      return movies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }

    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filterMovies();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
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
