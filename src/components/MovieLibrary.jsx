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

  handleSearching = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleBookmarked = (event) => {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  handleSelectedGenre = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  filtering = () => {
    const { searchText, bookmarkedOnly, movies, selectedGenre } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarkedOnly === true);
    }

    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      return movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    }
    return movies.filter((movie) => movie.title.includes(searchText));
  }

  addCardMovie = (cardMovie) => {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, cardMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filtering();

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearching }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addCardMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape(
    PropTypes.string,
  ).isRequired,
};
export default MovieLibrary;
