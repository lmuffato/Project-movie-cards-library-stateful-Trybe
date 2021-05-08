import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleSubmit(newMovie) {
    this.setState((oldState) => ({
      movies: [...oldState.movies, newMovie],
    }));
  }

  onSearchTextChange = (event) => {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange = (event) => {
    const { checked } = event.target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange = (event) => {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
  }

  movieFilter = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;
    if (searchText) {
      filteredMovies = movies.filter((movie) => (
        movie.title.toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      filteredMovies = movies.filter((movie) => (movie.bookmarked === true));
    }
    if (selectedGenre) {
      filteredMovies = movies.filter((movie) => (movie.genre === selectedGenre));
    }
    return filteredMovies;
  }

  render() {
    const movies = this.movieFilter();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleSubmit } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
