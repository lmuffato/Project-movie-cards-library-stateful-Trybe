import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      movies,
      searchText: '',
      selectedGenre: '',
      bookmarkedOnly: false,
    };
  }

  filterMovies = (newFilter) => {
    let { state } = this;
    state = { ...state, ...newFilter };
    const { searchText, selectedGenre, bookmarkedOnly } = state;
    const { movies } = this.props;
    let filteredMovies = movies.filter((movie) => (
      movie.storyline.includes(searchText)
      || movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
    ));
    filteredMovies = filteredMovies.filter(
      (movie) => (movie.genre.includes(selectedGenre)),
    );
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked);
    }
    this.setState({ movies: filteredMovies });
  };

  onSearchTextChange = ({ target: { value } }) => {
    this.setState({ searchText: value });
    this.filterMovies({ searchText: value });
  };

  onBookmarkedChange = ({ target: { checked } }) => {
    this.setState({ bookmarkedOnly: checked });
    this.filterMovies({ bookmarkedOnly: checked });
  };

  onSelectedGenreChange = ({ target: { value } }) => {
    this.setState({ selectedGenre: value });
    this.filterMovies({ selectedGenre: value });
  };

  addMovie = (newMovie) => {
    const { movies } = this.props;
    movies.push(newMovie);
    this.filterMovies({});
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies: stateMovies } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this;
    const propsSearchBar = {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    };
    return (
      <section>
        <SearchBar { ...propsSearchBar } />
        <MovieList movies={ stateMovies } />
        <AddMovie addMovie={ this.addMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
