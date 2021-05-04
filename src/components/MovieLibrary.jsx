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
      allMovies: movies,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBookMarkedChange = this.handleBookMarkedChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleTextChange(value) {
    this.setState({
      searchText: value,
    });
  }

  handleBookMarkedChange(value) {
    this.setState({
      bookmarkedOnly: value,
    });
  }

  handleGenreChange(value) {
    this.setState({
      selectedGenre: value,
    });
  }

  addMovie(movie) {
    this.setState((prevState) => ({
      allMovies: [...prevState.allMovies, movie],
    }));
  }

  render() {
    let { movies } = this.state;

    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    movies = bookmarkedOnly ? movies.filter((movie) => movie.bookmarked) : movies;
    movies = selectedGenre ? movies
      .filter((movie) => movie.genre === selectedGenre) : movies;
    movies = searchText ? movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)) : movies;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (event) => {
            this.setState({ searchText: event.target.value });
          } }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (event) => {
            this.setState({ bookmarkedOnly: event.target.checked });
          } }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (event) => {
            this.setState({ selectedGenre: event.target.value });
          } }
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
