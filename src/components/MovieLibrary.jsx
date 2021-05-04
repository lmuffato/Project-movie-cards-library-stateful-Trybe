import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
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

  handleSearch = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleBookmark = (event) => {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  handleSelected = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  filters = () => {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
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

  addNewMovie = (newMovie) => {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filters();

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmark }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelected }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
