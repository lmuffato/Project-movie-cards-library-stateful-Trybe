import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.filterMovies = this.filterMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onChangeHandle({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  bookmarkedMovies({ bookmarked }) {
    return bookmarked;
  }

  genreMovies({ genre }, selectedGenre) {
    if (genre === selectedGenre) return true;
    return false;
  }

  textMovies({ title, subtitle, storyline }, searchText) {
    if (
      title.toLowerCase().includes(searchText.toLowerCase())
      || subtitle.toLowerCase().includes(searchText.toLowerCase())
      || storyline.toLowerCase().includes(searchText.toLowerCase())
    ) return true;

    return false;
  }

  filterMovies() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre: genre } = this.state;
    let filtered;

    if (bookmarkedOnly) {
      filtered = movies.filter(this.bookmarkedMovies);
    }

    if (genre !== '') {
      filtered = filtered ? filtered.filter((movie) => this.genreMovies(movie, genre))
        : movies.filter((movie) => this.genreMovies(movie, genre));
    }

    return filtered ? filtered.filter((movie) => this.textMovies(movie, searchText))
      : movies.filter((movie) => this.textMovies(movie, searchText));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          { ...this.state }
          onSearchTextChange={ this.onChangeHandle }
          onBookmarkedChange={ this.onChangeHandle }
          onSelectedGenreChange={ this.onChangeHandle }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ (state) => console.log(state) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
