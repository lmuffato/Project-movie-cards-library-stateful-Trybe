import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.filterFavoriteMovies = this.filterFavoriteMovies.bind(this);
    this.addMovieClick = this.addMovieClick.bind(this);
    this.refreshState = this.refreshState.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  filterGenre = (gendata) => {
    const { selectedGenre } = this.state;
    return gendata.filter(({ genre }) => genre === selectedGenre);
  }

  filterSearchText(srcdata) {
    const { searchText } = this.state;
    return srcdata.filter(({ title, subtitle, storyline }) => title.includes(searchText)
      || subtitle.includes(searchText) || storyline.includes(searchText));
  }

  filterFavoriteMovies() {
    const { movies } = this.state;
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
  }

  refreshState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovieClick(movieData) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, movieData],
    }));
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly) this.filterFavoriteMovies(movies);
    if (selectedGenre) this.filterGenre(movies);
    if (searchText) this.filterSearchText(movies);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.refreshState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.refreshState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.refreshState }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: arrayOf(object),
}.isRequired;

export default MovieLibrary;
