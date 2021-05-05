// implement AddMovie component here
// import React from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.handleStateAddMovie = this.handleStateAddMovie.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleStateAddMovie(param) {
    this.setState((prevMovies) => ({
      movies: [...prevMovies.movies, { ...param }] }));
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value }, () => {
      this.filterMoviesByText();
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked }, () => {
      this.filterMoviesByMark();
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value }, () => {
      this.filterMoviesByGenre();
    });
  }

  filterMoviesByText() {
    const { movies, searchText } = this.state;
    this.setState({
      movies: movies.filter((movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase()))
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase())),
    });
  }

  filterMoviesByMark() {
    const { movies } = this.state;
    this.setState({
      movies: movies.filter((movie) => movie.bookmarked === true) });
  }

  filterMoviesByGenre() {
    const { movies, selectedGenre } = this.state;
    this.setState({
      movies: movies.filter((movie) => movie.genre === selectedGenre),
    });
  }

  render() {
    const { movies } = this.state;
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
        <AddMovie onClick={ this.handleStateAddMovie } />
        <MovieList movies={ movies } />
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
