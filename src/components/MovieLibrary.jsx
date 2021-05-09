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
      movieList: movies,
    };

    this.onlyBookmarked = this.onlyBookmarked.bind(this);
    this.setSelectedGenreState = this.setSelectedGenreState.bind(this);
    this.setBookmarkedState = this.setBookmarkedState.bind(this);
    this.setSearchTextState = this.setSearchTextState.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
    this.textFilter = this.textFilter.bind(this);
    this.setMovies = this.setMovies.bind(this);
  }

  onlyBookmarked(arrMov) {
    const { bookmarkedOnly } = this.state;
    return arrMov.filter(({ bookmarked }) => bookmarked === bookmarkedOnly);
  }

  setSelectedGenreState({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  setBookmarkedState({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  setSearchTextState({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  setMovies(newMovieData) {
    const { movieList } = this.state;
    this.setState({
      movieList: [...movieList, newMovieData],
    });
  }

  textFilter(arrMov) {
    const { searchText } = this.state;
    return arrMov.filter(({ title, subtitle, storyline }) => title.includes(searchText)
    || subtitle.includes(searchText) || storyline.includes(searchText));
  }

  genreFilter(arrMov) {
    const { selectedGenre } = this.state;
    return arrMov.filter(({ genre }) => genre === selectedGenre);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const searchProperties = {
      searchText,
      onSearchTextChange: this.setSearchTextState,
      bookmarkedOnly,
      onBookmarkedChange: this.setBookmarkedState,
      selectedGenre,
      onSelectedGenreChange: this.setSelectedGenreState,
    };
    let { movieList } = this.state;
    if (bookmarkedOnly) movieList = this.onlyBookmarked(movieList);
    if (selectedGenre) movieList = this.genreFilter(movieList);
    if (searchText) movieList = this.textFilter(movieList);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar { ...searchProperties } />
        <MovieList movies={ movieList } />
        <AddMovie onClick={ this.setMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
