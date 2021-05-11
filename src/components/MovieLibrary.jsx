// implement AddMovie component here
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
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  validateMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    let newMovies = movies;
    if (searchText) {
      newMovies = newMovies.filter(
        (movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase()),
      );
    }
    if (bookmarkedOnly) {
      newMovies = newMovies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      newMovies = newMovies.filter((movie) => movie.genre === selectedGenre);
    }
    this.setState({ movies: newMovies });
  }

  changeHandler = (event) => {
    const { name } = event.target;
    let { value } = event.target;
    if (name === 'bookmarkedOnly') value = event.target.checked;
    this.setState(({ [name]: value }), () => this.validateMovies());
  }

  addNewMovie = (newMovie) => {
    this.setState((oldState) => ({
      movies: [...oldState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeHandler }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeHandler }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeHandler }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
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
