import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
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

  handleChangeSearchText = ({ target }) => {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  handleChangeBookmarked = ({ target }) => {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  handleChangeSelectedGenre = ({ target }) => {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  handleAddMovie = (newMovie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  // filterMovies = (type, filter) => {
  //   const { movies } = this.state.movies;
  //   if (type === 'text') {
  //     return movies.filter(({title, subtitle, storyline}) => {
  //       return [title, subtitle, storyline].reduce((acc, cur) =>
  //         (cur.includes(searchText) ? true : acc), false)});
  //   } else if (type === 'check') {
  //     return movies.filter(({bookmarked}) => {
  //       return bookmarked === filter;
  //     })
  //   } else {
  //     return movies.filter(({genre}) => {
  //       return genre === filter;
  //     })
  //   }
  // }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.searchText !== this.state.searchText) {
  //     return this.filterMovies('text', this.state.searchText);
  //   } else if (prevState.bookmarkedOnly !== this.state.bookmarkedOnly) {
  //     return this.filterMovies('check', this.state.bookmarkedOnly);
  //   } else {
  //     return this.filterMovies('select', this.state.selectedGenre);
  //   }
  // }

  // Trecho de código feito pela colega Beatriz Barbosa
  filter(array, { bookmarkedOnly, selectedGenre, searchText }) {
    return array.filter(({ bookmarked, genre, title, subtitle, storyline }) => {
      if (bookmarkedOnly && !bookmarked) return false;
      if (selectedGenre !== '' && genre !== selectedGenre) return false;
      if (searchText !== '' && !([title, subtitle, storyline].reduce(
        (acc, cur) => (cur.includes(searchText) ? true : acc),
        false,
      ))) return false;
      return true;
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const searchBarProps = {
      searchText,
      onSearchTextChange: this.handleChangeSearchText,
      bookmarkedOnly,
      onBookmarkedChange: this.handleChangeBookmarked,
      selectedGenre,
      onSelectedGenreChange: this.handleChangeSelectedGenre,
    };
    const filteredMovies = this.filter(movies, { ...searchBarProps });
    return (
      <div>
        <SearchBar { ...searchBarProps } />

        <MovieList movies={ filteredMovies } />

        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
