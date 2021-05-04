import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import Searchbar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  filteredMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filteredMovies = movies;

    if (bookmarkedOnly === true) {
      filteredMovies = filteredMovies
        .filter((movie) => movie.bookmarked === bookmarkedOnly);
    }

    if (selectedGenre !== '') {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText) {
      return filteredMovies.filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(searchText.toLowerCase())
            || subtitle.toLowerCase().includes(searchText.toLowerCase())
            || storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
    }

    return filteredMovies;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    const movies = this.filteredMovies();
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      onClick,
    } = this;
    return (
      <div>
        <Searchbar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
