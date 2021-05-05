// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handInputs = this.handInputs.bind(this);
    this.filtredMovies = this.filtredMovies.bind(this);
    this.favoriteMovies = this.favoriteMovies.bind(this);
    this.filtredMoviesByGenre = this.filtredMoviesByGenre.bind(this);
    this.addMovie = this.addMovie.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  favoriteMovies() {
    const { movies, bookmarkedOnly } = this.state;
    const filtred = movies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    return filtred;
  }

  filtredMoviesByGenre() {
    const { movies, selectedGenre } = this.state;
    const filtred = movies.filter((movie) => movie.genre === selectedGenre);
    return filtred;
  }

  filtredMovies() {
    const { movies, searchText } = this.state;
    const filtred = movies.filter(
      (movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()),
    );
    return filtred;
  }

  handInputs(event) {
    const { value, name } = event.target;
    const { bookmarkedOnly } = this.state;

    if (name === 'searchText') {
      this.setState({
        [name]: value,
      });
    }

    if (name === 'selectedGenre') {
      this.setState({ [name]: value });
    }

    if (name === 'bookmarkedOnly') {
      if (bookmarkedOnly === false) {
        this.setState({ bookmarkedOnly: true });
      } else {
        this.setState({ bookmarkedOnly: false });
      }
    }
  }

  render() {
    const filtredsMovies = this.filtredMovies();
    const myFavoriteMovies = this.favoriteMovies();
    const moviesByGenre = this.filtredMoviesByGenre();

    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;
    if (searchText) movies = filtredsMovies;
    if (bookmarkedOnly) movies = myFavoriteMovies;
    if (selectedGenre) movies = moviesByGenre;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handInputs }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handInputs }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handInputs }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
