import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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

  handleText = (event) => {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  filterBookMarked = (arr) => {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly) {
      return arr.filter((movie) => movie.bookmarked === true);
    }
    return arr;
  }

  filterGenre = (arr) => {
    const { selectedGenre } = this.state;
    if (selectedGenre === '') {
      return arr;
    }
    return arr.filter((movie) => movie.genre === selectedGenre);
  }

  filterText = (arr) => {
    const returnArr = [];
    const { searchText } = this.state;
    return arr.filter((movie) => {
      if (movie.title.includes(searchText)) {
        return movie;
      }
      if (movie.subtitle.includes(searchText)) {
        return movie;
      }
      if (movie.storyline.includes(searchText)) {
        return movie;
      }
    });
  }

  handleBookedMarked = () => {
    const { bookmarkedOnly } = this.state;
    if (!bookmarkedOnly) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  handleSelectedGenre = (event) => {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
  }

  handleAddMovie = (movie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filterBook = this.filterBookMarked(movies);
    const filteredGenre = this.filterGenre(filterBook);
    const filteredText = this.filterText(filteredGenre);
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookedMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <AddMovie onClick={ this.handleAddMovie } />
        <MovieList movies={ filteredText } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
